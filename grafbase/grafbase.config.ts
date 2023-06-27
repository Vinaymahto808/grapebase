import { g, auth, config } from '@grafbase/sdk'

const user = g.model('User',{
  name: g.string().length({ min: 2, max: 20})
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string(),
  github: g.url().optional(),
  linkedIn: g.url().optional(),
  projects: g.relation() => Project).list().optional(),
})


  const Project = g.model('Project'{
    tiltle: g.string().length({ min: 3}),
    dessription: g.string(),
    image: g.url(),
    liveSiteurl: g.url(),
    githuburl: g.url(),
    category: g.string().search(),
    createdBy: g.relation(() => User),
  })


export default config({
  schema: g
})
