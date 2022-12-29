import React, { ReactNode } from 'react'

interface IWordsContainerProps {
    children: ReactNode
}

const WordsContainer = ({children}: IWordsContainerProps) => {
  return (
    <div className='relative text-3xl max-w-xl leading-relaxed break-all'>
        {children}
    </div>
  )
}

export default WordsContainer