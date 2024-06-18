import React, { FC, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    return (
        <div style={{ margin: '20px' }}>
            <input value={value} onChange={changeHandler} type="text" />
            <button onClick={clickHandler}>click</button>
        </div>
    );
};

export default EventsExample;