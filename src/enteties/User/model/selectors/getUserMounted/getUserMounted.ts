import { StateSchema } from 'app/StoreProvider';

export const getUserMounted = (state : StateSchema) => state.user._mounted
