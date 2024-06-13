import React, { FC, useState } from 'react';

export enum CardType {
    outlined = 'outlined',
    primary = 'primary',
}

interface ICardProps {
    type: CardType;
    width?: string;
    height?: string;
    onClick: (num: number) => void;
    children?: React.ReactNode;
}

const Card: FC<ICardProps> = ({ type, width, height, onClick, children }) => {
    const [state, setState] = useState(0);
    return (
        <div style={{ 
            width,
            height,
            border: type === CardType.outlined ? '2px solid grey' : 'none',
            background: type === CardType.primary ? 'lightgrey' : ''
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
};

export default Card;