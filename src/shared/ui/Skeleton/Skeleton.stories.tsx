import React from 'react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Skeleton from 'shared/ui/Skeleton/Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <Skeleton {...args} />;

export const PrimarySkeleton = Template.bind({});
PrimarySkeleton.args = {
    width: '100%',
    height: 200

};
export const RoundSkeleton = Template.bind({});
RoundSkeleton.args = {
    border: '50%',
    width: '100px',
    height: '100px'
};

export const PrimarySkeletonDark = Template.bind({});
PrimarySkeletonDark.args = {
    width: '100%',
    height: 200
};
PrimarySkeletonDark.decorators = [ThemeDecorator(Theme.DARK)]
export const RoundSkeletonDark = Template.bind({});
RoundSkeletonDark.args = {
    border: '50%',
    width: '100px',
    height: '100px'
};
RoundSkeletonDark.decorators = [ThemeDecorator(Theme.DARK)]
