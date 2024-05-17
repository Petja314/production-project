import React from 'react';
import {LoginForm} from "features/AuthByUsername";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator/StoreDecorator";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {InvertedBackgroundTheme} from "shared/ui/Button/Button.stories";

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
};

const Template = (args: any) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    login: {username: '123', password: '123'},

})]


export const withError = Template.bind({});
withError.args = {};
withError.decorators = [StoreDecorator({
    login: {username: '123', password: '123' , error : 'ERROR HAS OCCURRED PLEASE TRY AGAIN'},
})]

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    login : {isLoading : true}
})]

