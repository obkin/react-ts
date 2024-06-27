import React, { FC } from 'react';
import ButtonA from '../buttons/btn-A/ButtonA';
import { useDispatch, useSelector } from 'react-redux';
import { ICustomer, addCustomerAction, removeCustomerAction } from '../../redux/store/customersReducer';
import './Customers.css';

const Customers: FC = () => {
    const dispatch = useDispatch();
    const customers = useSelector((state: any) => state.customersReducer.customers)

    const addCustomer = () => {
        const customerName = prompt(`Введіть ім'я користувача:`);
        if (customerName) {
            const newCustomer: ICustomer = {
                id: Date.now(),
                name: customerName?.toString(),
            };
            dispatch(addCustomerAction(newCustomer));
        } else {
            alert('Невірний формат імені!');
        }
    };

    const deleteCustomer = (customerId: number) => {
        dispatch(removeCustomerAction(customerId));
    };

    return (
        <div className='customers-container'>
            <div>
                <ButtonA onClick={addCustomer}>Add customer</ButtonA>
            </div>

            <h1>List of customers:</h1>

            <div>
                {customers.length > 0 ? (
                    customers.map((customer: ICustomer) => 
                        <div 
                            key={customer.id}
                            onClick={() => deleteCustomer(customer.id)} 
                        >
                            {customer.name}
                        </div>
                    )
                ) : (
                  <div>Customers not found</div>  
                )}
            </div>
        </div>
    );
};

export default Customers;