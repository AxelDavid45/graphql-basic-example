'use strict'
const store = require('../store/store-client')

module.exports = {
	Query: {
		getCourses: async () => {
			let courses = null
			try {
				courses = await store.listAll('courses')
			} catch (err) {
				console.error(err)
			}
			return courses
		},
		getCourse: async (root, { id }) => {
			let course = null
			try {
				course = await store.findById('courses', id)
			} catch (err) {
				console.error(err)
			}
			return course
		}
	}
}
