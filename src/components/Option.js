import React from 'react';

const Option = (props) => {
    return (
        <div className="well option">
            <div className="option-text">
                <span>{props.index}.</span>
                {props.optionText}
            </div>
            <button 
                className="btn btn-danger"
                onClick={(e) => props.handleDeleteOption(props.optionText)}>remove</button>
        </div>
    );
};

export default Option;