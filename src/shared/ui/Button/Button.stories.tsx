import React from 'react';
import {Button, ButtonSize, ThemeButton} from "./Button";
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

export const OutlineSizeM = Template.bind({});
OutlineSizeM.args = {
    children: 'Text',
    theme : ThemeButton.OUTLINED,
    size : ButtonSize.M
};

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Text',
    theme : ThemeButton.OUTLINED,
    size : ButtonSize.L
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Text',
    theme : ThemeButton.OUTLINED,
    size : ButtonSize.XL
};


export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme : ThemeButton.OUTLINED
};
OutlineDark.decorators= [ThemeDecorator(Theme.DARK)]



export const BackgroundTheme = Template.bind({});
BackgroundTheme.args = {
    children: 'Text',
    theme : ThemeButton.BACKGROUND
};

export const InvertedBackgroundTheme = Template.bind({});
InvertedBackgroundTheme.args = {
    children: 'Text',
    theme : ThemeButton.BACKGROUND_INVERTED
};
InvertedBackgroundTheme.decorators= [ThemeDecorator(Theme.DARK)]

export const SquareSizeMedium = Template.bind({});
SquareSizeMedium.args = {
    children: '>',
    square : true,
    size : ButtonSize.M ,
    theme : ThemeButton.BACKGROUND_INVERTED
};


export const  SquareSizeLarge = Template.bind({});
SquareSizeLarge.args = {
    children: '>',
    square : true,
    size : ButtonSize.L ,
    theme : ThemeButton.BACKGROUND_INVERTED
};


export const SquareSizeExtraLarge = Template.bind({});
SquareSizeExtraLarge.args = {
    children: '>',
    square : true,
    size : ButtonSize.XL ,
    theme : ThemeButton.BACKGROUND_INVERTED
};





