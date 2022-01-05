import React from 'react'
import ContentEditable from '../base/contentEditable'

const TerminalPrompt = () => {
  return (
    <>
      <div className="flex flex-row terminal-prompt">
        <p className="prompt text-sm font-normal mr-7 text-pacificBlue">
          <span className="username">[ ashiish</span>
          <span>@</span>
          <span className="hostname">me </span>
          <span className="text-white">~</span>
          <span>]$</span>
        </p>
        <ContentEditable className={'flex-grow'} />
      </div>
    </>
  )
}

export default TerminalPrompt
