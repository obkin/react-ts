import React, { FC } from 'react';
import './ButtonA.css';

interface IButtonAProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

const ButtonA: FC<IButtonAProps> = ({ onClick, children }) => {
    return (
        <button 
            className='btn'
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default ButtonA;