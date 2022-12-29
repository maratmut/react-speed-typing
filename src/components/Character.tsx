import cn from "classnames";

interface ICharacterProps {
  char: string;
  expected: string;
}
const Character = ({ char, expected }: ICharacterProps) => {
  const isCorrect = char === expected;
  const isWhiteSpace = expected === ' ';
  

  return (
    <span
      className={cn({
        'text-red-500': !isCorrect && !isWhiteSpace,
        'text-primary-400': isCorrect && !isWhiteSpace,
        'bg-red-500/50': !isCorrect && isWhiteSpace,
      })}>
      {expected}
    </span>
  );
};

export default Character;
