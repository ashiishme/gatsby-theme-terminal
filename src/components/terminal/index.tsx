import React from 'react'
import { HistoryProvider } from '../../context/HistoryContext'
import TerminalBody from './terminalBody'
const Terminal = () => {
  return (
    <>
      <div className="terminal flex items-center justify-center h-screen">
        <HistoryProvider>
          <TerminalBody />
        </HistoryProvider>
      </div>
    </>
  )
}
export default Terminal
