import { StateSchema } from 'app/StoreProvider';

export const getLoginErrorState = (state : StateSchema) => state?.login?.error || '';
