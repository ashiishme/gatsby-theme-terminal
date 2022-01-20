import React from 'react'
import TerminalPrompt from './terminalPrompt'
import { HistoryProvider } from '../../context/HistoryContext'
import TerminalOutput from '../terminal/terminalOutput'

const TerminalBody = () => {
  return (
    <>
      <HistoryProvider>
        <div className="w-7/12 h-3/4 bg-mirage/[0.88] text-white rounded-lg shadow-lg p-10">
          <TerminalPrompt />
          <TerminalOutput />
        </div>
      </HistoryProvider>
    </>
  )
}
export default TerminalBody
