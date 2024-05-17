import { userReducer } from 'enteties/User/model/slice/userSlice';
import { UserSchema } from 'enteties/User/model/types/userSchema';
import { User } from 'enteties/User/ui/User';
import {getUserAuthData} from "enteties/User/model/selectors/getUserAuthData/getUserAuthData";

export {
    userReducer,
    UserSchema,
    User,
    getUserAuthData
};
