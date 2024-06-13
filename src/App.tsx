import React from 'react';
import Card, { CardType } from './components/Card';
import UserList from './components/UserList';

const App = () => {
  const users = [
    { id: 1, name: 'Yarok', email: 'test@test.test', address: { street: 'Shevchenko', city: 'Ternopil', zipcode: '48231' } },
    { id: 2, name: 'Kolya', email: 'test@test.test', address: { street: 'Tsechova', city: 'Husiatyn', zipcode: '48201' } },
  ];
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