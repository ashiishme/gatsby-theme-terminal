import { useRef, useEffect } from 'react'
import useCommand from '../hooks/useCommand'

const useEventListener = () => {
  const elemRef = useRef<HTMLDivElement>()
  const { executeCommand } = useCommand()

  useEffect(() => {
    const ref = elemRef.current

    const handleEnterKeyListener = (event) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        const { textContent: command } = event.target
        executeCommand(command)
        ref.innerText = ''
      }
    }

    if (ref) ref.addEventListener('keydown', handleEnterKeyListener)
    return () => {
      if (ref) ref.removeEventListener('keydown', handleEnterKeyListener)
    }
  }, [])

  return {
    elemRef,
  }
}
export default useEventListener
