import { StateSchema } from 'app/StoreProvider';

export const getProfileReadonly = (state : StateSchema) => state.profile?.readonly;
