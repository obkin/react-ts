import React, { FC } from 'react';
import EventsExample from '../../components/EventsExample';
import Card, { CardType } from '../../components/Card';
import './TrashPage.css'

const TrashPage: FC = () => {
    return (
        <div className='trash-container'>
            <EventsExample/>
            <Card type={CardType.outlined} width='200px' height='200px' onClick={(num: number) => console.log('was click', num)}>
            <button>click</button>
            </Card>
        </div>
    );
};

export default TrashPage;