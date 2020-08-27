'use strict'
const express = require('express')
const app = express()
const fs = require('fs')
const resolvers = require('./lib/resolvers')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('graphql-tools')

// Build the schema
const typeDefs = fs.readFileSync(`${__dirname}/lib/schema.graphql`, 'utf8')

const schema = makeExecutableSchema({
	typeDefs, resolvers
})
// use the middleware graphql
app.use('/api', graphqlHTTP({
	schema,
	graphiql: true
}))

app.listen(3000, () => {
	console.log(`Server listening at http://localhost:3000/api`)
})
