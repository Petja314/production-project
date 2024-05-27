import { userReducer } from 'enteties/User/model/slice/userSlice';
import { UserSchema } from 'enteties/User/model/types/userSchema';
import { User } from 'enteties/User/ui/User';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted/getUserMounted'

export {
    userReducer,
    UserSchema,
    User,
    getUserAuthData,
    getUserMounted
};
