import { CommandInterface } from '../../../interfaces/commandInterface'
import { CommandOutputProps } from '../../../types'
import GraphQLClient from '../../../utils/graphqlClient'

export default class WhoAmI implements CommandInterface {
  constructor() {}

  private async getAuthorInfo(): Promise<{ [key: string]: string } | null> {
    const result = await GraphQLClient`
      query getOwnerDetails {
        mdx(fileAbsolutePath: {regex: "/index.mdx/"}) {
          frontmatter {
            Name
            Location
            Designation
            Working_at
            Favorite_Editor
            Programming_Languages
            Talks_About
          }
        }
      }
    `

    if (!result.mdx) return null

    const authorInfo = result.mdx.frontmatter
    return authorInfo
  }

  private async toReact(): Promise<CommandOutputProps> {
    const result = await this.getAuthorInfo()

    if (!result) {
      throw new Error('Cannot find author information.')
    }

    const mappedAuthorInfo = Object.entries(result).map(([key, value]) => ({
      key: key.replace('_', ' '),
      value,
    }))

    return {
      component: 'TableView',
      data: [...mappedAuthorInfo],
    }
  }

  async execute(): Promise<CommandOutputProps> {
    return await this.toReact()
  }
}
