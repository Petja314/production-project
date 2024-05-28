import React from 'react';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'shared/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ArticleDetails {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
