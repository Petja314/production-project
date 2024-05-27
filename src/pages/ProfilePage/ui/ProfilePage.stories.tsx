import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Avatar from 'shared/assets/tests/storybookAvatar.jpg';
import { Currency } from 'enteties/Currency';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ProfilePage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    profile: {
        form: {
            name: 'dima',
            lastname: 'petrov',
            age: 27,
            city: 'soham',
            username: 'petya',
            currency: Currency.GBP
        }
    }
})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            name: 'dima',
            lastname: 'petrov',
            age: 27,
            city: 'soham',
            username: 'petya',
            currency: Currency.GBP
        }
    }
})]

// Dark.decorators = [ThemeDecorator(Theme.DARK)]; // Applying the theme decorator to the Light story
