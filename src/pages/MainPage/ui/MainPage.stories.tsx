import React from 'react';
import {Sidebar} from "widgets/Sidebar";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import MainPage from "pages/MainPage/ui/MainPage";

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args: any) => <MainPage {...args} />;

export const Light = Template.bind({});
Light.args = {};


export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; // Applying the theme decorator to the Light story







