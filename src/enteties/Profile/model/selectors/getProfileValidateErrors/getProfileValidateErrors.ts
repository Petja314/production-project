import { StateSchema } from 'app/StoreProvider';

export const getProfileValidateErrors = (state : StateSchema) => state.profile?.validateError;
