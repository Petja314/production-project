// COMPONENTS

export { ProfileCard } from 'enteties/Profile/ui/ProfileCard/ProfileCard';

export {
    Profile,
    ProfileSchema,
} from './model/types/Profile';

// SLICES REDUCER

export {
    profileSlice,
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

// THUNKS

export { fetchProfileDataThunk } from './model/services/fetchProfileData/fetchProfileData';
export { updateProfileDataThunk } from './model/services/updateProfileData/updateProfileData';

// SELECTORS

export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';
export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';
export { getProfileReadonly } from './model/selectors/getProfileReadonly/getProfileReadonly';
export { getProfileForm } from './model/selectors/getProfileForm/getProfileForm';
