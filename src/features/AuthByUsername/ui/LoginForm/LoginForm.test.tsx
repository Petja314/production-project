import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import LoginForm from 'features/AuthByUsername/ui/LoginForm/LoginForm';

describe('LoginForm.test', () => {
    test('should render login form', () => {
        componentRender(<LoginForm />);
        const button = screen.getByTestId('button-id');
        const loginInput = screen.getByTestId('login-id');
        const passwordInput = screen.getByTestId('password-id');

        expect(button).toBeInTheDocument();
        expect(loginInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
});
