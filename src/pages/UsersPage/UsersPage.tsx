import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../../types/types';
import UserItem from '../../components/UserItem';
import List from '../../components/List';
import './UsersPage.css';

const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        getUsers();
      }, []);

    async function getUsers() {
        try {
          const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
          setUsers(response.data);
        } catch (e) {
          console.log(e);
          alert(e);
        }
      }

    return (
        <div className='users-container'>
            <List 
                items={users} 
                renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} 
            />
        </div>
    );
};

export default UserPage;