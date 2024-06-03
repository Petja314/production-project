import React from 'react';
import { ArticlesPage } from 'pages/ArticlesPage';

export default {
    title: 'shared/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ArticlesPage {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
