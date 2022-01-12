import { useState, useRef, useEffect } from 'react'
import useCommand from '../hooks/useCommand'

const useEventListener = () => {
  const elemRef = useRef<HTMLDivElement>()
  const [showHistoryLog, setShowHistoryLog] = useState(false)
  const { executeCommand } = useCommand()

  useEffect(() => {
    const ref = elemRef.current

    const handleEnterKeyListener = (event) => {
      if (event.key === 'Enter') {
        const { textContent: command } = event.target
        executeCommand(command)
        setShowHistoryLog(true)
      }
    }

    if (ref) ref.addEventListener('keydown', handleEnterKeyListener)
    return () => {
      if (ref) ref.removeEventListener('keydown', handleEnterKeyListener)
    }
  }, [showHistoryLog])

  return {
    elemRef,
    showHistoryLog,
  }
}
export default useEventListener
