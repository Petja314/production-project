import React from 'react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import AboutPage from "pages/AboutPage/ui/AboutPage";

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args: any) => <AboutPage {...args} />;

export const Light = Template.bind({});
Light.args = {};


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; // Applying the theme decorator to the Light story







