import { StateSchema } from 'app/StoreProvider';

export const getLoginState = (state : StateSchema) => state?.login;
