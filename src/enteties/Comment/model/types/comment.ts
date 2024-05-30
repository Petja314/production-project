import { User } from 'enteties/User/model/types/userSchema';

export interface CommentData {
    id: string,
    user : User
    text: string,
    // articleId?: string,
    // userId?: string
}
