'use strict'
const singleCourse = [
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
	for (let i = 2; i <= copies; i++) {
		copy = Object.assign({}, courses[0])
		copy._id = `${copy._id}${i}`
		copy.title = `${copy.title}${i}`
		courses.push(copy)
	}
	return courses
}

module.exports = {
	Query: {
		getCourses: () => {
			return extendCourses(singleCourse, 20)
		},
		getCourse: (root, { id }) => {
			const courses = extendCourses(singleCourse, 10)
			console.log(courses)
			return courses.filter(course => course._id === id )[0]

		}
	}

}
