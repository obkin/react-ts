import React, { FC, useState } from 'react';
import Counter from '../../components/counter/Counter';
import './ReduxPage.css';

const ReduxPage: FC = () => {
    const [balance, setBalance] = useState<number>(0);

    return (
        <div className='redux-page-container'>
            <Counter counter={balance} btnOne='Add' btnTwo='Get'/>
        </div>
    );
};

export default ReduxPage;