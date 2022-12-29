import { useState } from "react";
import useCountdown from "./useCountdownTimer";
import useWords from "./useWords";

export type State = 'start' | 'run' | 'finish'

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30

const useEngine = () => {
    const [state, setState] = useState<State>('start')
    const {words, updateWords} = useWords(NUMBER_OF_WORDS)
    const { timeLeft, startCountdown, resetCountdown} = useCountdown(COUNTDOWN_SECONDS)
    return (
        {state, words, timeLeft}
    )
};
export default useEngine;