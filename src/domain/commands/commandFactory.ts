import { CommandInterface } from '../../interfaces/commandInterface'
import * as commands from '../commands/models'

export class CommandFactory {
  constructor(private commands: Map<string, CommandInterface> = new Map()) {}

  private loadCommands(): void {
    Object.entries(commands).forEach(([name, Command]) => {
      const newCommand = new Command()
      this.commands.set(name.toLowerCase(), newCommand)
    })
  }

  public getCommand(name: string): CommandInterface {
    if (!this.commands.get(name)) {
      throw new Error(`'${name}' command not found.`)
    }
    return this.commands.get(name)
  }

  public init(): void {
    this.loadCommands()
  }
}
