import React from 'react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';

export default {
    title: 'shared/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ArticleImageBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
