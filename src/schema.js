const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql')

const graphql = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
      greetings: {
        type: GraphQLString,
        resolve () {
          return 'Hello, World!'
        }
      }
    }
  })
})

module.exports = graphql
