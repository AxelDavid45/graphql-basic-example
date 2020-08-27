'use strict'
const {
	db: {
		user, host, pass, name
	}
} = require('../config')
const { MongoClient } = require('mongodb')
let connection = null
const mongoUrl = `mongodb+srv://${user}:${pass}@${host}/${name}?retryWrites=true&w=majority`

async function connectDb () {
	if (connection) {
		return connection
	}

	const client = new MongoClient(mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	try {
		await client.connect()
		connection = client.db(name)
	} catch (err) {
		process.exit(1)
		console.error('Could not connected to db', mongoUrl, err)
	}
	return connection
}

module.exports = connectDb
