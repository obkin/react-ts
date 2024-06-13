import React, { FC } from 'react';
import { IUser } from '../types/types';

interface IUserListProps {
    users: IUser[];
}

const UserList: FC<IUserListProps> = ({ users }) => {
    return (
        <div>
            {users.map(user => 
                <div key={user.id}>
                    {user.name} lives in {user.address.city} in the {user.address.street} street.
                </div>
            )}
        </div>
    );
};

export default UserList;