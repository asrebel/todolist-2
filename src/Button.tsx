import React from 'react';

type ButtonPropsType = {
    title: string
}

const Button: React.FC<ButtonPropsType> = ({title}) => {
    return (
        <button>{title}</button>
    );
};

export default Button;