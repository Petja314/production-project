import { ProfileCard } from 'enteties/Profile/ui/ProfileCard/ProfileCard';

export {
    Profile,
    ProfileSchema,
} from './model/types/Profile';

export {
    profileSlice,
    profileActions,
    profileReducer,
} from './model/slice/profileSlice';

export {
    fetchProfileDataThunk,
} from './model/services/fetchProfileData/fetchProfileData';

export { getProfileData } from './model/selectors/getProfileData/getProfileData';

export { getProfileError } from './model/selectors/getProfileError/getProfileError';

export { getProfileLoading } from './model/selectors/getProfileLoading/getProfileLoading';

export {
    ProfileCard,
} from './ui/ProfileCard/ProfileCard';
