import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
import { User } from 'enteties/User';
import {userActions} from "enteties/User/model/slice/userSlice";
import {USER_LOCALSTORAGE_KEY} from "shared/const/localStorage";


interface LoginByUsernameProps {
    username : string
    password : string
}

export const loginByUsernameThunk = createAsyncThunk<any,LoginByUsernameProps >(
    'login/loginByUsername',
    async (authData : LoginByUsernameProps, thunkAPI) => {
        try{
            const response = await axios.post('http://localhost:8000/login', authData)
            if(!response.data) {
                throw new Error()
            }
            //Back end imitation - saving the login credentials on signIn
            //After signOut data from LS will be removed!
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setAuthData(response.data))
            return response.data
        }
        catch(err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);
