import React, { FC } from 'react';
import './ButtonA.css';

interface IButtonAProps {
    children?: React.ReactNode;
}

const ButtonA: FC<IButtonAProps> = ({ children }) => {
    return (
        <button className='btn'>{children}</button>
    );
};

export default ButtonA;