import axios from 'axios';
import { loginByUsernameThunk } from 'features/AuthByUsername/model/services/loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { userActions } from 'enteties/User/model/slice/userSlice';
import { User } from 'enteties/User/model/types/userSchema';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername.test Thunk', () => {
    // let dispatch : Dispatch;
    // let getState : () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test('success login with thunk', async () => {
    //     const userValue : any = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
    //     const action = loginByUsernameThunk({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     // console.log(result);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toEqual(userValue);
    // });
    //
    // test('api request rejected , error login', async () => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    //     const action = loginByUsernameThunk({ username: '123', password: '123' });
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    // });

    test('success login with thunk', async () => {
        const userValue : any = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const thunk = new TestAsyncThunk(loginByUsernameThunk);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        // console.log(result);

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('api request rejected , error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncThunk(loginByUsernameThunk);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        // console.log(result);

        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
