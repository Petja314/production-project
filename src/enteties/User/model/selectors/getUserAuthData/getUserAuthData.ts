import { StateSchema } from 'app/StoreProvider';

export const getUserAuthData = (state : StateSchema) => state.user?.authData
