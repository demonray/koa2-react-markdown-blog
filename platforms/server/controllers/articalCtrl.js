import markdown from 'markdown-it'
import path from 'path'
import { readFile, getMarkdownData } from '../services/mdservice'
import config from '../../common/config'

var md = markdown()

var metaData = {
  Title: '',
  Tags: [],
  Category: []
}

const mkFilesPath = path.resolve(__dirname, '../articals')

export default async(ctx, next) => {
  let mdfile = path.join(mkFilesPath, ctx.params.articalId + '.md')
  let mdfilestr = await readFile(mdfile)
  let mdstr = mdfilestr.toString()
  let mdData = getMarkdownData(mdstr)
  let result = md.render(mdData.content)

  await ctx.render('artical', {
    title: config.title,
    metaData: Object.assign(metaData, mdData.metaData || {}),
    content: result
  })
}
