import React from 'react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {NotFoundPage} from "pages/NotFoundPage";

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args: any) => <NotFoundPage {...args} />;

export const Light = Template.bind({});
Light.args = {};


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; // Applying the theme decorator to the Light story







