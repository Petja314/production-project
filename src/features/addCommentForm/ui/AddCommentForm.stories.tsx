import React from 'react';
import { AddCommentForm } from 'features/addCommentForm';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'features/AddCommentForm',
    component: AddCommentForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <AddCommentForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
Primary.decorators = [
    StoreDecorator({})
]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
})]
