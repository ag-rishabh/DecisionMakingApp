import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
        <div>
            <div className="options-header">
                <h3>Your Options</h3>
                <button 
                    className="btn btn-default options-button"
                    onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
            {props.options.length === 0 && <p className="options well">Please add an option to get started!</p>}
            {
                props.options.map((option,index) =>
                    <Option
                        index={index + 1}
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
            }
        </div>
    );
};

export default Options;