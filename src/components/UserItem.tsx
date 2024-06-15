import React, { FC } from 'react';
import { IUser } from '../types/types';

interface IUserItemProps {
    user: IUser;
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
    return (
        <div style={{ padding: '15px', border: '1px solid grey' }}>
            {user.name} lives in {user.address.city} in the {user.address.street} street (email: {user.email}).
        </div>
    );
};

export default UserItem; 