'use strict'
const store = require('../../store/store-client')
module.exports = {
	createCourse: async (root, { courseInput }) => {
		const defaults = {
			teacher: '',
			description: ''
		}
		const newCourse = Object.assign(defaults, courseInput)
		try {
			const record = await store.create('courses', newCourse)
			newCourse._id = record.insertedId
		} catch (err) {
			console.error('Error inserting a new course', err)
		}
		return newCourse
	}
}
