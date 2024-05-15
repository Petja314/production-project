import React from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: 'default text default text default text',
        isOpen: true,
    },

};

const Template = (args: any) => <Modal {...args} />;

export const ModalLight = Template.bind({});
ModalLight.args = {};
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)]; // Applying the theme decorator to the Light story

export const ModalDark = Template.bind({});
ModalDark.args = {};
ModalDark.decorators = [ThemeDecorator(Theme.DARK)];
