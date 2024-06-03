import React from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <Text text="Random text" title="Random title" />
};
