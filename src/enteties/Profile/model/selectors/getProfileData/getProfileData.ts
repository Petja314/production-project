import { StateSchema } from 'app/StoreProvider';

export const getProfileData = (state : StateSchema) => state.profile?.data;
