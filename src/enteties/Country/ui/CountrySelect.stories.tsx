import React from 'react';
import { Country, CountrySelect } from 'enteties/Country';

export default {
    title: 'enteties/CountrySelect',
    component: CountrySelect,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    options: [
        { value: Country.Estonia, content: Country.Estonia },
        { value: Country.Latvia, content: Country.Latvia },
        { value: Country.Portugal, content: Country.Portugal },
        { value: Country.UnitedKingdom, content: Country.UnitedKingdom },
    ],
};
