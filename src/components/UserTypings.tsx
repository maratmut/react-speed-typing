import React from 'react';
import Caret from './Caret';
import Character from './Character';

interface IUserTypingsProps {
  userInput: string;
  className?: string;
  words: string;
}

const UserTypings = ({ userInput, className, words }: IUserTypingsProps) => {
  const typedCharacters = userInput.split('');
  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} expected={words[index]} />;
      })}
      <Caret />
    </div>
  );
};

export default UserTypings;
