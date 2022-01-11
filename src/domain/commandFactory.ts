import { CommandInterface } from '../interfaces/commandInterface'
import * as commands from './commands/models'

export class CommandFactory {
  public commands: Map<string, CommandInterface>
  constructor() {
    this.commands = new Map()
  }

  private loadCommands(): void {
    Object.entries(commands).forEach(([name, Command]) => {
      const newCommand = new Command()
      this.commands.set(name.toLowerCase(), newCommand)
    })
  }

  init(): void {
    this.loadCommands()
  }
}
