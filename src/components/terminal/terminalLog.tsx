import React, { FC } from 'react'
import TerminalPrompt from './terminalPrompt'
import { HistoryProps } from '../../hooks/useHistory'
const TerminalLog: FC<{ logs: HistoryProps[] }> = ({ logs }) => {
  return (
    <>
      {logs &&
        logs.map(({ type, data }, index: number) => (
          <div className="flex flex-row mb-4" key={index}>
            {type === 'command' ? (
              <>
                <TerminalPrompt />
                <div>{data}</div>
              </>
            ) : (
              <div>{data}</div>
            )}
          </div>
        ))}
    </>
  )
}

export default TerminalLog
