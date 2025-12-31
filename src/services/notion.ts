import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({ auth: import.meta.env.NOTION_TOKEN })
const n2m = new NotionToMarkdown({ notionClient: notion })

interface Project {
  title: string
  description: string
  link: string
  code?: string
}

class Notion {
  async getHomeData(): Promise<string[]> {
    const blocks = await n2m.pageToMarkdown(import.meta.env.HOME_PAGE_ID)

    return blocks.filter(block => block.parent).map(block => block.parent)
  }

  async getWorkData(): Promise<Project[]> {
    const db = await notion.databases.retrieve({ database_id: import.meta.env.WORK_PAGE_ID })

    if (!('data_sources' in db)) {
      throw new Error('No data sources found')
    }

    const dataSourceId = db.data_sources[0].id
    const res = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: 'hide',
        checkbox: { equals: false },
      },
      sorts: [{ property: 'order', direction: 'ascending' }],
    })

    return res.results.map(({ properties }: any) => ({
      title: properties.title.title[0].plain_text,
      description: properties.description.rich_text[0].plain_text,
      link: properties.link.url,
      code: properties.code.url,
    }))
  }
}

export default new Notion()
