import { StateSchema } from 'app/StoreProvider';

export const getProfileForm = (state : StateSchema) => state.profile?.form;
