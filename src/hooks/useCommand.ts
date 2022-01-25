import { useCallback } from 'react'
import { CommandFactory } from '../domain/commandFactory'

import useHistory from './useHistory'

const useCommand = () => {
  const { addHistory } = useHistory()
  const commandFactory = new CommandFactory()
  commandFactory.init()

  const executeCommand = useCallback(async (name: string) => {
    const command = commandFactory.getCommand(name)
    addHistory({
      type: 'command',
      data: name,
    })
    if (!command) {
      addHistory({
        type: 'error',
        data: `'${name}' command not found.`,
      })
      return
    }
    const commandOutput = await command.execute()
    addHistory({
      type: 'output',
      data: commandOutput,
    })
  }, [])

  return {
    executeCommand,
  }
}
export default useCommand
