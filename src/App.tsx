import React from 'react';
import Card, { CardType } from './components/Card';

const App = () => {
  return (
    <div>
      <Card type={CardType.outlined} width='200px' height='200px' onClick={(num: number) => console.log('was click', num)}>
        <button>click</button>
      </Card>
    </div>
  );
};

export default App;