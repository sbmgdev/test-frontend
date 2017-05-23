import axios from 'axios';

let _courses = []

axios.get('https://raw.githubusercontent.com/skyzito/test-frontend/96ba2b922a5665acf59a69e5e28e4d0914c9fc5a/api/courses.json')
	 .then(response => {
	 // JSON responses are automatically parsed.
	this.courses = response.data.data
			_courses = this.courses
	})
	.catch(e => {
		this.errors.push(e)
	})

export default {
  getCourses (cb) {
    setTimeout(() => cb(_courses), 100)
  },
}
