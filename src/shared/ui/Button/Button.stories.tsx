import React from 'react';
import {Button, ThemeButton} from "./Button";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
// import 'app/styles/index.scss'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

const Template = (args : any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme : ThemeButton.CLEAR
};


export const Outlined = Template.bind({});
Outlined.args = {
    children: 'Text',
    theme : ThemeButton.OUTLINED
};

export const OutlinedDark = Template.bind({});
OutlinedDark.args = {
    children: 'Text',
    theme : ThemeButton.OUTLINED
};
OutlinedDark.decorators= [ThemeDecorator(Theme.DARK)]








