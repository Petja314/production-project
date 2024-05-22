import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
};

const Template = (args: any) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.decorators = [StoreDecorator({
    login: { username: '123', password: '123' },

})];

export const withError = Template.bind({});
withError.decorators = [StoreDecorator({
    login: { username: '123', password: '123', error: 'ERROR HAS OCCURRED PLEASE TRY AGAIN' },
})];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({
    login: { isLoading: true },
})];
