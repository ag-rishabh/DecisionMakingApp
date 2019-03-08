import React from 'react';

const Header = (props) => {
    return (
            <div className="text-center jumbotron header">
                <div className="container">
                    <h1>{props.title.toUpperCase()}</h1>
                    {props.subtitle && <h2 className="text-center">{props.subtitle}</h2>}
                </div>
            </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

export default Header;