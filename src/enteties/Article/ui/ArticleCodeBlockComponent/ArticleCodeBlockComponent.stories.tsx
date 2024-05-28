import React from 'react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';

export default {
    title: 'shared/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ArticleCodeBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
