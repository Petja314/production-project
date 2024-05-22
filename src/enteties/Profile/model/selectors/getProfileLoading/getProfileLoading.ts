import { StateSchema } from 'app/StoreProvider';

export const getProfileLoading = (state : StateSchema) => state.profile?.isLoading || '';
