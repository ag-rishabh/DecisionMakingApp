import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import './style.css';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        error: undefined,
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            };
        });
    };
    handleClearSelectedOption = () => {
        this.setState(() => {
            return {
                selectedOption: undefined
            };
        });
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState({
                    options: options
                });
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleDeleteOption = (removeOption) => {
        const newOptions = this.state.options.filter(option => {
            return option !== removeOption;
        });
        this.setState(() => {
            return {
                options: newOptions
            };
        });
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => {
            return {
                selectedOption: option
            };
        });
    }
    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        e.target.elements.option.value = ''
        if (!option) {
            this.setState({
                error: 'Enter valid value to add item'
            });
        } else if (this.state.options.indexOf(option) > -1) {
            this.setState({
                error: 'This option already exists'
            });
        } else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option),
                    error: undefined
                };
            });
        }
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div className="bg-color container">
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                    error={this.state.error}
                />
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;