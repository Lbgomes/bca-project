import { render, screen, fireEvent } from '@testing-library/react';
import Header from './';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

describe('Header Component', () => {

    test('renders the Header component', () => {
        render(

            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                </Router>
            </ThemeProvider>

        );

        const titleElement = screen.getByText(/fsec/i);
        expect(titleElement).toBeInTheDocument();

        const favouriteIcon = screen.getByLabelText('favourite');
        expect(favouriteIcon).toBeInTheDocument();
    });

    test('opens the modal when the favourite icon is clicked', () => {
        render(<ThemeProvider theme={theme}>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>);

        const favouriteIcon = screen.getByLabelText('favourite');
        fireEvent.click(favouriteIcon);

        const modalElement = screen.getByLabelText('modal');
        expect(modalElement).toBeInTheDocument();
    });

    test('closes the modal when the close icon is clicked', () => {
        render(<ThemeProvider theme={theme}>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>);

        const favouriteIcon = screen.getByLabelText('favourite');
        fireEvent.click(favouriteIcon);

        const modalElement = screen.getByLabelText('modal');
        expect(modalElement).toBeInTheDocument();

        const closeIcon = screen.getByLabelText('modal').querySelector('svg');
        fireEvent.click(closeIcon!);

        expect(modalElement).not.toBeInTheDocument();
    });

    test('renders the modal content correctly', () => {
        render(<ThemeProvider theme={theme}>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>);

        const favouriteIcon = screen.getByLabelText('favourite');
        fireEvent.click(favouriteIcon);

        expect(screen.getByText(/murilo gomes/i)).toBeInTheDocument();

    });

    test('modal hire me link opens in a new tab', () => {
        render(<ThemeProvider theme={theme}>
            <Router>
                <Header />
            </Router>
        </ThemeProvider>);

        const favouriteIcon = screen.getByLabelText('favourite');
        fireEvent.click(favouriteIcon);

        const hireMeLink = screen.getByText(/hire me/i).closest('a');
        expect(hireMeLink).toHaveAttribute('href', 'https://wa.link/mw52wt');
        expect(hireMeLink).toHaveAttribute('target', '_blank');
    });
});
