import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Student from "../components/Student.vue";
import Register from "../components/Register.vue";
import ClassRoom from "../components/ClassRoom.vue";
import Teacher from "../components/Teacher.vue";
import MenuManagement from "../components/MenuManagement.vue";

const routes = [
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/home",
        name: "Home",
        component: Home,
    },
    {
        path: "/student",
        name: "Student",
        component: Student,
    },
    {
        path: "/classRoom",
        name: "ClassRoom",
        component: ClassRoom,
    },
    {
        path: "/teacher",
        name: "Teacher",
        component: Teacher,
    },
    {
        path: "/menuManagement",
        name: "MenuManagement",
        component: MenuManagement,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
