import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { IUser } from '../../types/types';
import './UserItemPage.css';

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        getUser();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    async function getUser() {
        try {
          const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`);
          setUser(response.data);
        } catch (e) {
          console.log(e);
          alert(e);
        }
      }

    return (
        <div className='user-item-container'>
            {user ? (
                <div>
                    <h1>Page of {user.name}</h1>
                    <p>id: {user.id}</p>
                    <p>email: {user.email}</p>
                </div>
            ) : (
                <p>User not found</p>
            )}


            <button onClick={() => navigator('/users')}>Back</button>
        </div>
    );
};

export default UserItemPage;