import React from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarImage from './storybookAvatar.jpg';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template = (args: any) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 200,
    alt: 'avatar',
    src: AvatarImage,
};

export const SmallSize = Template.bind({});
SmallSize.args = {
    size: 100,
    alt: 'avatar',
    src: AvatarImage,
};
