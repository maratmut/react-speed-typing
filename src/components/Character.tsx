interface ICharacterProps {
  char: string;
}
const Character = ({ char }: ICharacterProps) => {
  return <span className="text-primary-400">{char}</span>;
};

export default Character;
