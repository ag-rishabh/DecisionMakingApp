import React from 'react';

const AddOption = (props) => {
    return (
        <div>
            {props.error && <p className="add-option-error">{props.error}</p>}
            <form className="add-option" onSubmit={props.handleAddOption}>
                <input className="add-option__input" type="text" name="option" />
                <button className="btn btn-success">Add Option</button>
            </form>
        </div>
    );
};

export default AddOption;