import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { userActions } from 'enteties/User/model/slice/userSlice';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { User } from 'enteties/User/model/types/userSchema';
import { ThunkConfig, ThunkExtraArg } from 'app/StoreProvider';

interface LoginByUsernameProps {
    username : string
    password : string

}

export const loginByUsernameThunk = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string> >(
    'login/loginByUsername',
    async (authData : LoginByUsernameProps, thunkAPI) => {
        const { dispatch, extra } = thunkAPI;
        try {
            const response = await extra.api.post('/login', authData);

            if (!response.data) {
                throw new Error();
            }
            // Back end imitation - saving the login credentials on signIn
            // After signOut data from LS will be removed!
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate('/about');
            return response.data;
        } catch (err) {
            // return thunkAPI.rejectWithValue(err.message);
            return thunkAPI.rejectWithValue('login error');
        }
    },
);
