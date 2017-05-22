import Home from './components/home/Home.vue';
import Course from './components/course/Course.vue';

export const routes = [

    { path: '', component: Home },
    { path: '/course/:id',  name:'course', component: Course }

];