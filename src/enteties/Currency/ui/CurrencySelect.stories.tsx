import React from 'react';
import { Currency, CurrencySelect } from 'enteties/Currency';

export default {
    title: 'enteties/CurrencySelect',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    options: [
        { value: Currency.EURO, content: Currency.EURO },
        { value: Currency.GBP, content: Currency.GBP },
        { value: Currency.USD, content: Currency.USD },
    ],
};
