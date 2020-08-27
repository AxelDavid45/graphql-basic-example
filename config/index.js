'use strict'
require('dotenv').config()

const config = {
	db: {
		user: process.env.DB_USR,
		pass: process.env.DB_PASSWD,
		host: process.env.DB_HOST,
		name: process.env.DB_NAME
	}
}

module.exports = config
