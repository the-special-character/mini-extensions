import { screen } from '@testing-library/react';
import App from './App';
import { renderWithProviders } from './utils/renderWithProviders';

test('renders App Component', async () => {
  renderWithProviders(<App />)
  expect(screen.getByTestId('student-form')).toBeInTheDocument()
  expect(screen.queryByTestId('class-info')).not.toBeInTheDocument()
  expect(screen.queryByTestId('logout')).not.toBeInTheDocument()
});

