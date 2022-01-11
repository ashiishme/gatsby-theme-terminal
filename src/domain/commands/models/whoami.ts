import { CommandInterface } from '../../../interfaces/commandInterface'

export default class WhoAmI implements CommandInterface {
  constructor() {}

  async execute() {
    console.log('WhoAmI here')
  }
}
