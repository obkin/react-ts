import React from 'react';

interface ICardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
}

const Card = ({ width, height, children }: ICardProps) => {
    return (
        <div style={{ width, height, border: '2px solid grey' }}>
            {children}
        </div>
    );
};

export default Card;