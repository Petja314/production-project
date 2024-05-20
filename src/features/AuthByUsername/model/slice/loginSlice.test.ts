import { loginReducer, LoginSchema } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state : LoginSchema = { username: 'user' };
        expect(loginReducer(state, loginActions.setUsername('user'))).toEqual({ username: 'user' });
    });

    test('test set password', () => {
        const state : LoginSchema = { password: 'test-pw' };
        expect(loginReducer(state, loginActions.setPassword('test-pw'))).toEqual({ password: 'test-pw' });
    });

    test('test set error', () => {
        const state : LoginSchema = { error: 'error-test' };
        expect(loginReducer(state, loginActions.setError('error-test'))).toEqual({ error: 'error-test' });
    });
});
