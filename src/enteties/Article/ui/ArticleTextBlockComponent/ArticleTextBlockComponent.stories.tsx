import React from 'react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';

export default {
    title: 'shared/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ArticleTextBlockComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
