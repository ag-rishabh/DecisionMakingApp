import React from 'react';

const Action = (props) => {
    return (
        <div className="action">
            <button className="btn btn-default btn-lg btn-block big-button"
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
                What should I do?
                </button>
        </div>
    );
};

export default Action;