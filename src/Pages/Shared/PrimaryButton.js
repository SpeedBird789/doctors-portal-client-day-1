import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="btn btn-primary text-white font-bold">{children}</button>
    );
};

export default PrimaryButton;