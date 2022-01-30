import { CommandInterface } from '../../../interfaces/commandInterface'
import { CommandOutputProps } from '../../../types'

export default class WhoAmI implements CommandInterface {
  constructor() {}

  private toReact(): CommandOutputProps {
    const data = {
      component: 'TableView',
      data: [
        { key: 'Name', value: 'Ashish Yadav' },
        { key: 'Location', value: 'Berlin, Germany' },
        { key: 'Designation', value: 'Software Engineer' },
        { key: 'Working at', value: 'Lendis' },
        { key: 'Favorite Editor', value: 'Vs Code' },
        { key: 'Programming Languages', value: 'JavaScript, TypeScript & C++' },
        {
          key: 'Talks About',
          value: `#node, #react, #serverless, #test-driven-development, #open-source, #coding-standards, #writing-secure-code,
        #software-engineering & #tech-community`,
        },
      ],
    }
    return data
  }

  async execute(): Promise<CommandOutputProps> {
    return this.toReact()
  }
}
