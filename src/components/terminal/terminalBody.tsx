import React from 'react'
import TerminalPrompt from './terminalPrompt'
const TerminalBody = () => {
  return (
    <>
      <div className="w-7/12 h-3/4 bg-mirage/[0.88] text-white font-bold rounded-lg shadow-lg p-10">
        <TerminalPrompt />
      </div>
    </>
  )
}
export default TerminalBody
