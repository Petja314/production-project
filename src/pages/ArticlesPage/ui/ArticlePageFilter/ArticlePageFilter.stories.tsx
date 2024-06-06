import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ArticlePageFilter } from './ArticlePageFilter';

export default {
    title: 'shared/ArticlePageFilter',
    component: ArticlePageFilter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <ArticlePageFilter {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
