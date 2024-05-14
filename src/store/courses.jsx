import { create } from 'zustand'

const  getCourses =  create((set) => ({
     courses: [],
    setCourses:(courses)=> set({courses})
}))