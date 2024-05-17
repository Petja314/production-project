import React from 'react';
import {Text, TextTheme} from "./Text"
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args : any) => <Text {...args} />;

export const TextPrimary = Template.bind({});
TextPrimary.args = {
    title : "Title Random",
    text : "Description"
};

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title : "Title Random",
};

export const OnlyText = Template.bind({});
OnlyText.args = {
    text : "Description"
};


//-----------------DARK THEME------------------

export const TextPrimaryDark = Template.bind({});
TextPrimaryDark.args = {
    title : "Title Random",
    text : "Description"
};
TextPrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title : "Title Random",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text : "Description"
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]



export const PrimaryRed = Template.bind({});
PrimaryRed.args = {
    title : "Red Title Random",
    text : "Red Description",
    theme : TextTheme.ERROR
};
// PrimaryRed.decorators = [ThemeDecorator(TextTheme.ERROR)]

export const RedTitleOnly = Template.bind({});
RedTitleOnly.args = {
    title : "Red Title Random",
    theme : TextTheme.ERROR

};
// RedTitleOnly.decorators = [ThemeDecorator(TextTheme.ERROR)]

export const RedTextOnly = Template.bind({});
RedTextOnly.args = {
    text : "Red Description",
    theme : TextTheme.ERROR

};
// RedTextOnly.decorators = [ThemeDecorator(TextTheme.ERROR)]




