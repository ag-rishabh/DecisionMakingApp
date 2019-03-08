import React from 'react';

const AddOption = (props) => {
    return (
        <div>
            {props.error && <p>{props.error}</p>}
            <form onSubmit={props.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
};

export default AddOption;