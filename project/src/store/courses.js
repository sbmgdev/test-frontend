import coursesList from '../api/coursesList'

const state = {
  all: []
}

const actions = {
  getAllCourses ({commit}) {
    coursesList.getCourses(courses => {
      commit('recieve_courses', courses)
    })
  }
}

const mutations = {
  recieve_courses (state, courses) {
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