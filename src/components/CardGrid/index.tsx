import React from 'react';
import Card from '../Card';

interface CardGridProps {
  phrases: string[];
}

const CardGrid: React.FC<CardGridProps> = ({ phrases }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {phrases.map((phrase, index) => (
        <Card key={index} text={phrase} />
      ))}
    </div>
  );
};

export default CardGrid;
