import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Code } from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'export default {\n'
        + "    title: 'shared/Code',\n"
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + "        backgroundColor: { control: 'color' },\n"
        + '    },\n'
        + '};\n'
        + '\n'
        + 'const Template = (args: any) => <Code {...args} />;'
};

export const Dark = Template.bind({});
Dark.args = {
    text: 'export default {\n'
        + "    title: 'shared/Code',\n"
        + '    component: Code,\n'
        + '    argTypes: {\n'
        + "        backgroundColor: { control: 'color' },\n"
        + '    },\n'
        + '};\n'
        + '\n'
        + 'const Template = (args: any) => <Code {...args} />;'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)]
