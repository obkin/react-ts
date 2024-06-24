import React, { FC } from 'react';
import Counter from '../../components/counter/Counter';
import './ReduxPage.css';

const ReduxPage: FC = () => {
    return (
        <div className='redux-page-container'>
            <Counter btnOne='Add' btnTwo='Get'/>
        </div>
    );
};

export default ReduxPage;