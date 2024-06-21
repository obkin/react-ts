import React, { FC } from 'react';
import { IUser } from '../types/types';
import { useNavigate } from 'react-router-dom';

interface IUserItemProps {
    user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
    const navigator = useNavigate();

    return (
        <div onClick={() => navigator(`/users/${user.id}`)} style={{ padding: '15px', border: '1px solid grey' }}>
            {user.name} lives in {user.address.city} in the {user.address.street} street (email: {user.email}).
        </div>
    );
};

export default UserItem; 