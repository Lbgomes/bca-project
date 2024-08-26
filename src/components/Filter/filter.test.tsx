import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './';
import '@testing-library/jest-dom/extend-expect'; 
import { ThemeProvider } from 'styled-components';
import { mockTheme } from 'mockData/mockTheme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Filter Component', () => {
    const mockSetFilter = jest.fn();
    const options = [
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' }
    ];

    const defaultProps = {
        title: 'Test Filter',
        filter: '',
        setFilter: mockSetFilter,
        options: options,
    };

    it('should render the title and the select element', () => {
        render(

            <ThemeProvider theme={mockTheme}>
                <Router>
                    <Filter {...defaultProps} />;
                </Router>
            </ThemeProvider>
        )

        expect(screen.getByText('Test Filter')).toBeInTheDocument();

        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toBeInTheDocument();
    });

    it('should render the provided options in the select element', () => {
        render(
            <ThemeProvider theme={mockTheme}>
                <Router>
                    <Filter {...defaultProps} />;
                </Router>
            </ThemeProvider>
        );

        const selectElement = screen.getByRole('combobox');
        fireEvent.focus(selectElement);

        expect(screen.getByText('Select your filter')).toBeInTheDocument();
        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
    });

    it('should call setFilter when an option is selected', () => {
        render(
            <ThemeProvider theme={mockTheme}>
                <Router>
                    <Filter {...defaultProps} />;
                </Router>
            </ThemeProvider>
        );

        const selectElement = screen.getByRole('combobox');
        fireEvent.focus(selectElement);
        fireEvent.keyDown(selectElement, { key: 'ArrowDown', code: 40 });
        fireEvent.keyDown(selectElement, { key: 'ArrowDown', code: 40 });
        fireEvent.keyDown(selectElement, { key: 'Enter', code: 13 });

        expect(mockSetFilter).toHaveBeenCalledWith({ label: 'Option 1', value: '1' });
    });

    it('should disable the select element when isDisabled is true', () => {
        render(
            <ThemeProvider theme={mockTheme}>
                <Router>
                    <Filter {...defaultProps} isDisabled />;
                </Router>
            </ThemeProvider>
        );

        const selectElement = screen.getByLabelText('Filter');
        expect(selectElement).toBeDisabled();
    });
});
