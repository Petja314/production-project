import { CounterSchema } from 'enteties/Counter/module/types/counterSchema';
import { getCounter } from 'enteties/Counter/module/selectors/getCounter/getCounter';
import { counterSlice } from './module/slice/counterSlice';
import { Counter } from './ui/Counter';

export {
    CounterSchema,
    counterSlice,
    Counter,
    getCounter,
};
