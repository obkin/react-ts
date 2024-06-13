import React, { useEffect, useState } from 'react';
import Card, { CardType } from './components/Card';
import UserList from './components/UserList';
import { IUser } from './types/types';
import axios from 'axios';

const App = () => {
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
    <div>
      <Card type={CardType.outlined} width='200px' height='200px' onClick={(num: number) => console.log('was click', num)}>
        <button>click</button>
      </Card>
      <UserList users={users}/>
    </div>
  );
};

export default App;