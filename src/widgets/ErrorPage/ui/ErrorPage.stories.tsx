import React from 'react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {ErrorPage} from "widgets/ErrorPage/ui/ErrorPage";

export default {
    title: 'widgets/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args: any) => <ErrorPage {...args} />;

export const Light = Template.bind({});
Light.args = {};


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; // Applying the theme decorator to the Light story







