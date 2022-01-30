import React, { FC } from 'react'
import TerminalPrompt from './terminalPrompt'
import { HistoryProps } from '../../types'
import TerminalMapper from '../../utils/terminalMapper'

const TerminalLog: FC<{ logs: HistoryProps[] }> = ({ logs }) => {
  return (
    <>
      {logs &&
        logs.map(({ type, output }, index) => {
          return (
            <div className="flex flex-row mb-4" key={index}>
              {type === 'command' ? (
                <>
                  <TerminalPrompt />
                  <div>{output}</div>
                </>
              ) : (
                TerminalMapper(output)
              )}
            </div>
          )
        })}
    </>
  )
}

export default TerminalLog
