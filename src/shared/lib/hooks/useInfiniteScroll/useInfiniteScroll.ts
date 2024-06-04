// import { MutableRefObject, useEffect, useRef } from 'react';
//
// export interface useInfiniteScrollOptions {
//     callback? : () => void
//     triggerRef : MutableRefObject<HTMLElement>
//     wrapperRef : MutableRefObject<HTMLElement>
// }
// export function useInfiniteScroll({ callback, triggerRef, wrapperRef } : useInfiniteScrollOptions) {
//     // const observer = useRef<IntersectionObserver | null>(null);
//
//     useEffect(() => {
//         const observer : IntersectionObserver | null = null;
//         if(callback) {
//             const options = {
//                 root: wrapperRef.current,
//                 rootMargin: '0px',
//                 threshold: 1.0
//             }
//             const observer = new IntersectionObserver(([entry]) => {
//                 if(entry.isIntersecting) {
//                     // console.log('intersected')
//                     callback();
//                 }
//             }, options);
//             observer.observe(triggerRef.current)
//         }
//
//         return () => {
//             if(observer) {
//                 // eslint-disable-next-line react-hooks/exhaustive-deps
//                 observer.unobserve(triggerRef.current)
//             }
//         }
//     }, [callback, triggerRef, wrapperRef])
// }

import { MutableRefObject, useEffect, useRef } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLElement>;
    wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfiniteScroll({ callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };

            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElement);
        }

        return () => {
            if (observer.current && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.current.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
}
