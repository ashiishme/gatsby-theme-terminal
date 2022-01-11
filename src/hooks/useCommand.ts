import { CommandFactory } from '../domain/commandFactory'

const useCommand = () => {
  const commandFactory = new CommandFactory()
  commandFactory.init()

  const executeCommand = (name: string) => {
    const command = commandFactory.commands.get(name)
    command.execute()
  }

  return {
    executeCommand,
  }
}
export default useCommand
