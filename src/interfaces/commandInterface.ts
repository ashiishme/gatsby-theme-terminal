import { CommandOutputProps } from '../types'
export interface CommandInterface {
  execute(): Promise<CommandOutputProps>
}
