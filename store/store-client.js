'use strict'

const mongo = require('./mongo')
const { ObjectId } = require('mongodb')
async function listAll (collection) {
	const connection = await mongo()
	return connection.collection(collection).find({}).toArray()
}

async function findById (collection, id) {
	const connection = await mongo()
	return connection.collection(collection).findOne({ _id: ObjectId(id) })
}

module.exports = {
	listAll,
	findById
}

