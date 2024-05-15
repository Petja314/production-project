import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from 'enteties/Counter';
import { fireEvent, screen } from '@testing-library/react';

describe('Counter', () => {
    test('with only one param', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const valueTitle = screen.getByTestId('counter-value');
        expect(valueTitle).toHaveTextContent('10');
    });

    test('increment value on page', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const incBtn = screen.getByTestId('inc-button');
        fireEvent.click(incBtn);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });

    test('decrement value on page', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        const decBtn = screen.getByTestId('dec-button');
        fireEvent.click(decBtn);
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
