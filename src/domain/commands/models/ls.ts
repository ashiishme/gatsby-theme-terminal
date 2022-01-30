import { CommandInterface } from '../../../interfaces/commandInterface'
import { CommandOutputProps } from '../../../types'

export default class LS implements CommandInterface {
  constructor() {}

  private toReact(): CommandOutputProps {
    const data = {
      component: 'TableView',
      data: ['home', 'blog', 'projects', 'about', 'contact'],
    }
    return data
  }

  async execute(): Promise<CommandOutputProps> {
    return this.toReact()
  }
}
