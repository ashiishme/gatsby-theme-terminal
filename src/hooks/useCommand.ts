import { useCallback } from 'react'
import { CommandFactory } from '../domain/commandFactory'

import useHistory from './useHistory'

const useCommand = () => {
  const { addHistory } = useHistory()
  const commandFactory = new CommandFactory()
  commandFactory.init()

  const executeCommand = useCallback((name: string) => {
    const command = commandFactory.getCommand(name)
    command.execute()
    addHistory({
      type: 'command',
      data: name,
    })
  }, [])

  return {
    executeCommand,
  }
}
export default useCommand
