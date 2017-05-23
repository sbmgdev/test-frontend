import coursesList from '../api/coursesList'

const state = {
  all: []
}

const actions = {
  getAllCourses ({commit}) {
    coursesList.getCourses(courses => {
      commit('receive_courses', courses)
    })
  }
}

const mutations = {
  receive_courses (state, courses) {
    state.all = courses
  },
}

const getters = {
  allCourses (state) {
    return state.all
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}