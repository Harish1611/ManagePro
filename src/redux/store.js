import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

import projectReducer from "./slices/projectSlice";

import taskReducer from './slices/taskSlice';

import memberReducer from "./slices/memberSlice";

import dashboardReducer from "./slices/dashboardSlice";

import userReducer from "./slices/userSlice";


export const store = configureStore({

    reducer: {

        auth: authReducer,

        projects: projectReducer,

        tasks: taskReducer,

        members: memberReducer,

        dashboard: dashboardReducer,

        users: userReducer,

    },

});

export default store;