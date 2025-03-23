import { render, fireEvent } from '@testing-library/vue';
import { describe, expect, test } from 'vitest';
import Login from '../Login.vue';

describe('Test - Login.vue component', () => {
  // Test rendering of the heading
  test('should display "Login Form" heading', () => {
    const { getByText } = render(Login);
    expect(getByText('Login Form')).toBeInTheDocument();
  });

  // Test username input field
  test('should render username input and allow typing', async () => {
    const { getByLabelText } = render(Login);
    const usernameInput = getByLabelText('Username');
    
    expect(usernameInput).toBeInTheDocument();
    expect(usernameInput).toHaveAttribute('placeholder', 'Enter your username');
    expect(usernameInput).toHaveAttribute('type', 'text');

    // Simulate typing
    await fireEvent.update(usernameInput, 'testuser');
    expect(usernameInput).toHaveValue('testuser');
  });

  // Test password input field
  test('should render password input and allow typing', async () => {
    const { getByLabelText } = render(Login);
    const passwordInput = getByLabelText('Password');
    
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('placeholder', 'Enter your password');
    expect(passwordInput).toHaveAttribute('type', 'password');

    // Simulate typing
    await fireEvent.update(passwordInput, 'secret123');
    expect(passwordInput).toHaveValue('secret123');
  });

  // Test login button
  test('should render login button and trigger form submission', async () => {
    const { getByText } = render(Login);
    const loginButton = getByText('Login'); // Define loginButton here
    
    expect(loginButton).toBeInTheDocument();
    expect(loginButton).toHaveAttribute('type', 'submit');

    // Find the form by traversing up from the button
    const formElement = loginButton.closest('form');
    if (!formElement) throw new Error('Form element not found in the DOM');

    // Spy on console.log
    const consoleSpy = vi.spyOn(console, 'log');
    
    // Simulate form submission
    await fireEvent.submit(formElement);
    
    expect(consoleSpy).toHaveBeenCalled(); 
    consoleSpy.mockRestore();
  });

  // Test form submission with inputs filled
  test('should log username and password on form submission', async () => {
    const { getByLabelText, getByText } = render(Login);
    
    // Fill inputs
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');
    
    await fireEvent.update(usernameInput, 'testuser');
    await fireEvent.update(passwordInput, 'secret123');
    
    // Mock console.log to capture output
    const consoleSpy = vi.spyOn(console, 'log');
    await fireEvent.click(loginButton);
    
    expect(consoleSpy).toHaveBeenCalledWith('Login attempted with:', {
      username: 'testuser',
      password: 'secret123',
    });
    consoleSpy.mockRestore();
  });
});