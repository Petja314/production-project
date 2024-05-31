import React from 'react';
import { CommentList } from './CommentList';

export default {
    title: 'enteties/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <CommentList {...args} />;

export const PrimaryComments = Template.bind({});
PrimaryComments.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '1', username: 'Petya' },
        },
    ],
};

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
