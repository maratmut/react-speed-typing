import React from 'react';
import Caret from './Caret';
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
      <Caret />
    </div>
  );
};

export default UserTypings;
