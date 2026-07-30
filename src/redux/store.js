import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

import projectReducer from "./slices/projectSlice";

import taskReducer from './slices/taskSlice';

import memberReducer from "./slices/memberSlice";

import dashboardReducer from "./slices/dashboardSlice";

import userReducer from "./slices/userSlice";

import teamReducer from "@/redux/slices/teamSlice";

import profileReducer from "@/redux/slices/profileSlice";

import notificationReducer from "./slices/notificationSlice";

export const store = configureStore({

    reducer: {

        auth: authReducer,

        projects: projectReducer,

        tasks: taskReducer,

        members: memberReducer,

        dashboard: dashboardReducer,

        users: userReducer,

        team: teamReducer,

        profile: profileReducer,

        notifications: notificationReducer,

    },

});

export default store;