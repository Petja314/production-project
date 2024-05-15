import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../module/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../module/slice/counterSlice';
import cls from './Counter.module.scss';

interface CounterProps {
    className?: string

}

export const Counter = ({ className }: CounterProps) => {
    const counterValue = useSelector(getCounterValue);

    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div className={classNames(cls.Counter, {}, [className])}>
            <h1 data-testid="counter-value">
                value :
                {counterValue}
            </h1>

            <Button data-testid="inc-button" onClick={incrementHandler}>
                increment
            </Button>

            <Button data-testid="dec-button" onClick={decrementHandler}>
                decrement
            </Button>

        </div>
    );
};
