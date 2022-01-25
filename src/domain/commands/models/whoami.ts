import { CommandInterface } from '../../../interfaces/commandInterface'

export default class WhoAmI implements CommandInterface {
  constructor() {}

  async execute(): Promise<string> {
    return 'Hello, Ashish Yadav'
  }
}
