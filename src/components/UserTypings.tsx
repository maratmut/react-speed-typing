import React from 'react';
import Character from './Character';

interface IUserTypingsProps {
  userInput: string;
  className?: string;
}

const UserTypings = ({ userInput, className }: IUserTypingsProps) => {
  const typedCharacters = userInput.split('');
  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
    </div>
  );
};

export default UserTypings;
