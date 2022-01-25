import { CommandInterface } from '../../../interfaces/commandInterface'

export default class TestCommand implements CommandInterface {
  constructor() {}

  async execute() {
    return 'Test Command'
  }
}
