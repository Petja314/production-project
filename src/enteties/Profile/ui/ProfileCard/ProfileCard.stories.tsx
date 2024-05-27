import React from 'react';
import { ProfileCard } from 'enteties/Profile';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Avatar from '../../../../shared/assets/tests/storybookAvatar.jpg'

export default {
    title: 'enteties/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        name: 'dima',
        lastname: 'petrov',
        age: 27,
        currency: 'usd',
        country: 'uk',
        city: 'soham',
        username: 'petya',
        avatar: Avatar
    }
};

export const CardError = Template.bind({});
CardError.args = {
    error: true
};

export const CardLoading = Template.bind({});
CardLoading.args = {
    isLoading: true
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        name: 'dima',
        lastname: 'petrov',
        age: 27,
        currency: 'usd',
        country: 'uk',
        city: 'soham',
        username: 'petya',
        avatar: Avatar
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; // Applying the theme decorator to the Light story
