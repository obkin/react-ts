import axios from 'axios';
import { ITodo } from '../types/types';
import React, { FC, useEffect, useState } from 'react';
import List from '../components/List';
import TodoItem from '../components/TodoItem';

const TodoPage: FC = () => {
    const [todo, setTodo] = useState<ITodo[]>([]);

    useEffect(() => {
      getTodos();
    }, []);
  
    async function getTodos() {
      try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodo(response.data);
      } catch (e) {
        console.log(e);
        alert(e);
      }
    }
    
    return (
        <div>
            <List
                items={todo}
                renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
            />
        </div>
    );
};

export default TodoPage;