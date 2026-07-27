import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";

import authService from "@/services/authService";

const user = JSON.parse(
    localStorage.getItem("user")
);

const initialState = {

    user,

    loading: false,

    error: null

};

/*
|--------------------------------------------------------------------------
| Register
|--------------------------------------------------------------------------
*/

export const register = createAsyncThunk(

    "auth/register",

    async (userData, thunkAPI) => {

        try {

            return await authService.register(userData);

        } catch (error) {

            return thunkAPI.rejectWithValue(

                error.response?.data?.message ||
                error.message

            );

        }

    }

);

/*
|--------------------------------------------------------------------------
| Login
|--------------------------------------------------------------------------
*/

export const login = createAsyncThunk(

    "auth/login",

    async (userData, thunkAPI) => {

        try {

            return await authService.login(userData);

        }

        catch (error) {

            return thunkAPI.rejectWithValue(

                error.response?.data?.message ||
                error.message

            );

        }

    }

);

/*
|--------------------------------------------------------------------------
| Profile
|--------------------------------------------------------------------------
*/

export const fetchProfile = createAsyncThunk(

    "auth/profile",

    async (_, thunkAPI) => {

        try {

            return await authService.getProfile();

        }

        catch (error) {

            return thunkAPI.rejectWithValue(

                error.response?.data?.message ||
                error.message

            );

        }

    }

);

const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {

        logout(state) {

            state.user = null;

            authService.logout();

        }

    },

    extraReducers: (builder) => {

        builder

            .addCase(login.pending, (state) => {

                state.loading = true;

            })

            .addCase(login.fulfilled, (state, action) => {

                state.loading = false;

                state.user = action.payload.data;

                localStorage.setItem(

                    "user",

                    JSON.stringify(action.payload.data)

                );

            })

            .addCase(login.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload;

            })

            .addCase(register.pending, (state) => {

                state.loading = true;

            })

            .addCase(register.fulfilled, (state, action) => {

                state.loading = false;

                state.user = action.payload.data;

                localStorage.setItem(

                    "user",

                    JSON.stringify(action.payload.data)

                );

            })

            .addCase(register.rejected, (state, action) => {

                state.loading = false;

                state.error = action.payload;

            })

            .addCase(fetchProfile.fulfilled, (state, action) => {

                state.user = {

                    ...state.user,

                    ...action.payload.data

                };

            });

    }

});

export const {

    logout

} = authSlice.actions;

export default authSlice.reducer;