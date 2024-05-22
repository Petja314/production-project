import { StateSchema } from 'app/StoreProvider';

export const getProfileError = (state : StateSchema) => state.profile?.error || '';
