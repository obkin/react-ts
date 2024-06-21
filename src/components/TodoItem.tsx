import React, { FC } from 'react';
import { ITodo } from '../types/types';
import { useNavigate } from 'react-router-dom';

interface ITodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<ITodoItemProps> = ({ todo }) => {
    const navigator = useNavigate();

    return (
        <div onClick={() => navigator(`/todos/${todo.id}`)}>
            <input type="checkbox" checked={todo.completed} />
            {todo.id}. {todo.title}
        </div>
    );
};

export default TodoItem;