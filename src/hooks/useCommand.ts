import { useCallback } from 'react'
import { CommandFactory } from '../domain/commands/commandFactory'

import useHistory from './useHistory'

const useCommand = () => {
  const { addHistory } = useHistory()
  const commandFactory = new CommandFactory()
  commandFactory.init()

  const executeCommand = useCallback(async (name: string) => {
    const command = commandFactory.getCommand(name)
    addHistory({
      type: 'command',
      output: name,
    })
    if (!command) {
      addHistory({
        type: 'error',
        output: `'${name}' command not found.`,
      })
      return
    }
    const commandOutput = await command.execute()
    if (commandOutput) {
      addHistory({
        type: 'output',
        output: commandOutput,
      })
    }
  }, [])

  return {
    executeCommand,
  }
}
export default useCommand
