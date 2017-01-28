
const express = require('express')
const graphqlHTTP = require('express-graphql')

const schema = require('./src/schema')

const app = express()

app.get('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000, () => console.log('Server listen on 3000'))
