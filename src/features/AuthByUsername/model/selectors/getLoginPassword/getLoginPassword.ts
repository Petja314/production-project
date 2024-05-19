import { StateSchema } from 'app/StoreProvider';

export const getLoginPasswordState = (state : StateSchema) => state?.login?.password || '';
