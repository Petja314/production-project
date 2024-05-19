import { StateSchema } from 'app/StoreProvider';

export const getLoginUsernameState = (state : StateSchema) => state?.login?.username || '';
