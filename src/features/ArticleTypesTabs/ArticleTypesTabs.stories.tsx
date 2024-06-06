import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticleTypesTabs } from './ArticleTypesTabs';

export default {
    title: 'shared/ArticleTypesTabs',
    component: ArticleTypesTabs,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ArticleTypesTabs {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
