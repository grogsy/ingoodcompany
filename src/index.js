const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Post = require('./resolvers/Post')
const Subscription = require('./resolvers/Subscription')
const Community = require('./resolvers/Community')


const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Post,
    Community
  }

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },
  })
server.start(() => console.log(`Server is running on http://localhost:4000`))


// David's general tips & notes

// Look more into understanding graphql &