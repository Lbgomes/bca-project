import { render, screen, fireEvent } from '@testing-library/react';
import Filter from './';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'styles/theme';

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

            <ThemeProvider theme={theme}>
                <Router>
                    <Filter {...defaultProps} />;
                </Router>
            </ThemeProvider>
        )

        expect(screen.getByText('Test Filter')).toBeInTheDocument();

        const selectElement = screen.getByRole('combobox');
        expect(selectElement).toBeInTheDocument();
    });

    it('should call setFilter when an option is selected', () => {
        render(
            <ThemeProvider theme={theme}>
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

    it('renders the correct options in the Select dropdown', () => {
        render(<Filter title="Select your filter" setFilter={mockSetFilter} options={options} />);

        fireEvent.mouseDown(screen.getByLabelText('Filter'));

        options.forEach(option => {
            expect(screen.getByText(option.label)).toBeInTheDocument();
        });
    });

    it('calls setFilter when an option is selected', () => {
        render(<Filter title="Select your filter" setFilter={mockSetFilter} options={options} />);

        fireEvent.mouseDown(screen.getByLabelText('Filter'));
        const optionElement = screen.getByText('Option 1');
        fireEvent.click(optionElement);

        expect(mockSetFilter).toHaveBeenCalledWith({ label: 'Option 1', value: '1' });
    });

    it('disables the Select when isDisabled is true', () => {
        render(<Filter title="Select your filter" setFilter={mockSetFilter} isDisabled={true} />);

        const selectElement = screen.getByLabelText('Filter');
        expect(selectElement).toBeDisabled();
    });

    it('should disable the select element when isDisabled is true', () => {
        render(
            <ThemeProvider theme={theme}>
                <Router>
                    <Filter {...defaultProps} isDisabled />;
                </Router>
            </ThemeProvider>
        );

        const selectElement = screen.getByLabelText('Filter');
        expect(selectElement).toBeDisabled();
    });
});


