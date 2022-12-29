import { faker } from '@faker-js/faker';
import RestartButton from './components/RestartButton';
import Results from './components/Results';
import UserTypings from './components/UserTypings';
import WordsContainer from './components/WordsContainer';
import useEngine from './hooks/useEngine';
import { calculateAccuracyPercentage } from './utils/helpers';



function App() {
  const { state, words, timeLeft, errors, restart, totalTyped, typed } = useEngine();
  return (
    <>
      <CountTimer timeLeft={timeLeft} />
      <WordsContainer>
        <GenerateWords words={words} />
        <UserTypings className="absolute inset-0" words={words} userInput={typed} />
      </WordsContainer>
      <RestartButton onRestart={restart} className={'mx-auto mt-10 text-slate-500'} />
      <Results
      state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className=" text-slate-500">{words}</div>;
};

const CountTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
