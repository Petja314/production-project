import 'app/styles/index.scss'
import React from 'react';


export const StyleDecorator = (StoryComponent: any) => (
    <>
        <div>
            <StoryComponent />
        </div>
    </>
);


