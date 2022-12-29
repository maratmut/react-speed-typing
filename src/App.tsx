import { faker } from '@faker-js/faker';
import RestartButton from './components/RestartButton';
import Results from './components/Results';

const words = faker.random.words(10);

function App() {
  return (
    <>
      <CountTimer timeLeft={30} />
      <GenerateWords words={words} />;
      <RestartButton onRestart={() => null} className={'mx-auto mt-10 text-slate-500'} />
    <Results className='mt-10' errors={10} accuracyPercentage={100} total={200}  />
    </>
  );
}

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-2xl text-center text-slate-500">{words}</div>;
};

const CountTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
