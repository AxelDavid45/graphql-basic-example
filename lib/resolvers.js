'use strict'
const courses = [
	{
		_id: 'uniqueId',
		title: 'my course',
		teacher: 'me',
		description: 'a course',
		topic: 'programming'
	}
]

function extendCourses (courses, copies) {
	let copy = null
	for (let i = 0; i <= copies; i++) {
		copy = Object.assign({}, courses[0])
		copy._id = `${copy.id}${i}`
		copy.title = `${copy.title}${i}`
		courses.push(copy)
	}
	return courses
}

module.exports = {
	getCourses: () => {
		return extendCourses(courses, 20)
	}
}
