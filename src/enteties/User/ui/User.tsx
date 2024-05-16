import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/StoreProvider';
import { userActions } from 'enteties/User/model/slice/userSlice';
import cls from './User.module.scss';

interface UserProps {
    className? : string

}

export const User = ({ className } : UserProps) => {
    const { username, password } = useSelector((state : StateSchema) => state.user);
    const dispatch = useDispatch();

    const loginHandler = async () => {
        try {
            const response = await fetch('http://localhost:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });
            const data = await response.json();
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className={classNames(cls.User, {}, [className])}>
            <div>
                Login :
                <input type="text" onChange={(event : any) => dispatch(userActions.username(event.target.value))} />
            </div>
            <div>
                Password :
                <input type="text" onChange={(event : any) => dispatch(userActions.password(event.target.value))} />
            </div>
            <button onClick={loginHandler}>login</button>

        </div>
    );
};
