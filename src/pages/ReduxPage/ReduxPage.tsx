import React, { FC } from 'react';
import Counter from '../../components/counter/Counter';
import Customers from '../../components/customers/Customers';
import './ReduxPage.css';

const ReduxPage: FC = () => {
    return (
        <div className='redux-page-container'>
            <Counter btnOne='Add' btnTwo='Get'/>
            <Customers />
        </div>
    );
};

export default ReduxPage;