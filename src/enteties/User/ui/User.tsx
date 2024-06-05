import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/StoreProvider';
import { userActions } from 'enteties/User/model/slice/userSlice';
// import cls from './User.module.scss';

interface UserProps {
    className? : string

}

export const User = ({ className } : UserProps) => (
    // <div className={classNames(cls.User, {}, [className])} >
    // </div>
    <div />
);
