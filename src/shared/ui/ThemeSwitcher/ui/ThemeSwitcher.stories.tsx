import React from 'react';
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";


export default {
    title: 'shared/ThemeSwitcher',
    component: ThemeSwitcher,
    args : {
        to : '/'
    }
}


const Template = (args: any) => <ThemeSwitcher {...args} />;

export const Primary= Template.bind({});
Primary.args = {}


export const Dark= Template.bind({});
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]; // Applying the theme decorator to the Light story

