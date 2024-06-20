import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [drug, setDrug] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(value);
    }

    const clickHandlerRef = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('WAS DRAG');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrug(false);
    }

    const leaveHandlaer = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrug(false);
    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDrug(true);
    }

    return (
        <div style={{ margin: '20px' }}>
            <input value={value} onChange={changeHandler} type="text" placeholder='managed' style={{ margin: '10px' }} />
            <button onClick={clickHandler}>managed</button>
            <input ref={inputRef} type="text" placeholder='unmanaged' style={{ margin: '10px' }} />
            <button onClick={clickHandlerRef}>unmanaged</button>
            <div draggable onDrag={dragHandler} style={{ width: '200px', height: '200px', background: 'red', marginTop: '15px' }}></div>
            <div 
                onDrop={dropHandler}
                onDragLeave={leaveHandlaer}
                onDragOver={dragWithPreventHandler}
                style={{ width: '200px', height: '200px', background: drug ? 'blue' : 'red', marginTop: '15px' }}>
            </div>
        </div>
    );
};

export default EventsExample;