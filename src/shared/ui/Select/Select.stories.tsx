import React from 'react';
import { Select } from 'shared/ui/Select/Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'select',
    options: [
        { value: '123', content: 'Первый пункт' },
        { value: '124', content: 'Второй пункт' },
        { value: '125', content: 'Третий пункт' },
    ],
};

// className?: string
// label?: string
// options? : SelectOptions[]
// value? : string
// onChange? : (value : string) => void
