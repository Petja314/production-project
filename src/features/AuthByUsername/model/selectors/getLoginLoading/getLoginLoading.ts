import { StateSchema } from 'app/StoreProvider';

export const getLoginLoadingState = (state : StateSchema) => state?.login?.isLoading || false;
