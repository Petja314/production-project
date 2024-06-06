import React from 'react';
import { action } from '@storybook/addon-actions'
import { Tabs } from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <Tabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    tabs: [
        { content: 'IT', value: 'tab 1 ' },
        { content: 'SCIENCE', value: 'tab 2 ' },
        { content: 'TECHNOLOGY', value: 'tab 3 ' },
        { content: 'NEWS', value: 'tab 4 ' },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
};
