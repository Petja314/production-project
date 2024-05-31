import React from 'react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { CommentCard } from './CommentCard';

export default {
    title: 'enteties/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <CommentCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    comment: {
        id: '1',
        text: 'random text',
        user: {
            id: '1',
            username: 'petya',
            avatar: 'https://avatars.githubusercontent.com/u/101811219?s=400&u=d1b15aae8c1151deb91e5457fa7ffc73f7f1e4b5&v=4'
        },
    },
    isLoading: false
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true
};
