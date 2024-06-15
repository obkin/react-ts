import React, { useEffect, useState } from 'react';
import Card, { CardType } from './components/Card';
import { IUser } from './types/types';
import axios from 'axios';
import List from './components/List';
import UserItem from './components/UserItem';

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
      <List 
        items={users} 
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} 
      />
    </div>
  );
};

export default App;