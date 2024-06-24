import React, { FC } from 'react';
import ButtonA from '../buttons/btn-A/ButtonA';
import './Counter.css'

interface ICounter {
    counter: number;
    btnOne: string;
    btnTwo: string;
}

const Counter: FC<ICounter> = ({ counter, btnOne, btnTwo }) => {
    return (
        <div className='counter-container'>
            <h1>{counter}</h1>

            <div className='counter-btns-container'>
                <ButtonA>{btnOne}</ButtonA>
                <ButtonA>{btnTwo}</ButtonA>
            </div>
        </div>
    );
};

export default Counter;