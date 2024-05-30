export interface User {
    id : string
    username : string
    avatar? : string
}

export interface UserSchema {
    // username?: string
    // password? : string
    authData? : User
    _mounted : boolean
}
