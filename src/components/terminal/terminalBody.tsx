import React from 'react'
import TerminalPrompt from './terminalPrompt'
import TerminalLog from './terminalLog'
import useHistory from '../../hooks/useHistory'

const TerminalBody = () => {
  const { history } = useHistory()

  const handleScrollToEnd = (ref: HTMLDivElement) => {
    if (ref) {
      ref.scrollTop = ref.scrollHeight
    }
  }

  return (
    <div
      ref={handleScrollToEnd}
      className="w-7/12 h-3/4 bg-mirage/[0.88] text-white rounded-lg shadow-lg p-10 overflow-y-scroll overflow-x-hidden"
    >
      <TerminalLog logs={history} />
      <TerminalPrompt />
    </div>
  )
}
export default TerminalBody
