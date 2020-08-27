'use strict'
const { graphql, buildSchema } = require('graphql')
const express = require('express')
const app = express()
const fs = require('fs')
const resolvers = require('./lib/resolvers')
const { graphqlHTTP } = require('express-graphql')

// Build the schema
const gqlSchemas = fs.readFileSync(`${__dirname}/lib/schema.graphql`, 'utf8')

const schema = buildSchema(gqlSchemas)
// use the middleware graphql
app.use('/api', graphqlHTTP({
	schema,
	rootValue: resolvers,
	graphiql: true
}))

app.listen(3000, () => {
	console.log(`Server listening at http://localhost:3000/api`)
})
