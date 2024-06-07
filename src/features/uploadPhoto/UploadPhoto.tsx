import React from 'react';
import { Input } from 'shared/ui/Input/Input';

interface UploadPhotoProps {
    data? : any
    onChangeAvatar? : (value? : string) => void
}

const UploadPhoto = (props : UploadPhotoProps) => {
    const { data, onChangeAvatar } = props;

    return (
        <Input
            placeholder="Введите ссылку на Аватар"
            value={data?.avatar}
            onChange={onChangeAvatar}
        />
    );
};

export default UploadPhoto;
