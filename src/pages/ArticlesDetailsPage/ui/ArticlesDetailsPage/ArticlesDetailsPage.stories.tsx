import React from 'react';
import { ArticlesDetailsPage } from 'pages/ArticlesDetailsPage';

export default {
    title: 'shared/ArticlesDetailsPage',
    component: ArticlesDetailsPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ArticlesDetailsPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
