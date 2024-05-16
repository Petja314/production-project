import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from 'shared/ui/Input/Input';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
    },
};

const Template = (args: any) => <Input {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {

};

export const InputWithPlaceholder = Template.bind({});
InputWithPlaceholder.args = {
    placeholder: 'Placeholder text test : ',
};
