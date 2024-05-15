import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PropsPortal {
    children?: ReactNode
    element?: HTMLElement
}

const Portal = (props : PropsPortal) => {
    const { children, element = document.body } = props;
    return createPortal(children, element);
};

export default Portal;
