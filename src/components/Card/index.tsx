import React from "react";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <article className="flex justify-center items-center text-lg border-[1px] border-secondary/60 h-24 rounded-md shadow-lg animate-fade-up animate-duration-500 p-2 overflow-auto">
      <p>{text}</p>
    </article>
  );
};

export default Card;
