import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { TextArea } from './TextArea';

export default {
    title: 'shared/TextArea',
    component: TextArea,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
