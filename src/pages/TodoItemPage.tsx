import React, { FC, useEffect, useState } from 'react';
import { ITodo } from '../types/types';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null);
    const params = useParams();
    const navigator = useNavigate();

    useEffect(() => {
      getTodo();
    }, []);
  
    async function getTodo() {
      try {
        const response = await axios.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${params.id}`);
        setTodo(response.data);
      } catch (e) {
        console.log(e);
        alert(e);
      }
    }

    return (
        <div>
            {todo ? (
                <h1>{todo.id} | {todo.title} | {todo.completed ? 'completed' : 'not completed'}</h1>
            ) : (
                <p>Todo not found</p>
            )}

            <button onClick={() => navigator('/todos')}>Back</button>
        </div>
    );
};

export default TodoItemPage;