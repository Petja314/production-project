import React from 'react';
import { SideBar } from 'widgets/Sidebar';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {

    title: 'widgets/Sidebar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]; // Applying the theme decorator to the Light story
