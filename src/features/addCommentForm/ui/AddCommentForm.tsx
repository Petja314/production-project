import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getAddCommentFormError, getAddCommentFormText } from 'features/addCommentForm/module/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { addCommentFormActions, addCommentFormReducer } from 'features/addCommentForm/module/slices/addCommentFormSlice';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss'

interface AddCommentFormProps {
    className?: string
    onSendComment? : (text : string) => void
}

const reducer : ReducersList = {
    addCommentForm: addCommentFormReducer
}

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText)
    const error = useSelector(getAddCommentFormError)
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value : string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [onCommentTextChange, onSendComment, text])

    return (
        <DynamicModuleLoader reducers={reducer}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    value={text}
                    onChange={onCommentTextChange}
                    placeholder="Введите текст коментария"
                />
                <Button
                    theme={ThemeButton.OUTLINED}
                    onClick={onSendHandler}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm
