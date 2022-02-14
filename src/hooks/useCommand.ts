import { useCallback } from 'react'
import { CommandFactory } from '../domain/commands/commandFactory'

import useHistory from './useHistory'

const useCommand = () => {
  const { addHistory } = useHistory()
  const commandFactory = new CommandFactory()
  commandFactory.init()

  const executeCommand = useCallback(async (name: string) => {
    addHistory({ type: 'command', output: name })

    try {
      const command = commandFactory.getCommand(name)
      const output = await command.execute()
      addHistory({ type: 'output', output: output })
    } catch (error) {
      addHistory({ type: 'error', output: error.message })
      console.error(error)
    }
  }, [])

  return {
    executeCommand,
  }
}
export default useCommand
