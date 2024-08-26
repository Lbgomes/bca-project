import { render, screen } from '@testing-library/react';
import DataWithSkeleton from './';
import '@testing-library/jest-dom/extend-expect';
import { useCar } from 'context/car';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from 'styles/theme';

jest.mock('context/car', () => ({
    useCar: jest.fn(),
}));


describe('DataWithSkeleton Component', () => {
    const mockUseCar = useCar as jest.Mock;;
    beforeEach(() => {
        mockUseCar.mockReset();
    });

    it('renders Skeleton when loading', () => {
        mockUseCar.mockReturnValue({ isLoading: true });

        render(
            <ThemeProvider theme={theme}>
                <Router>
                    <DataWithSkeleton>
                        <div>Test Content</div>
                    </DataWithSkeleton>
                </Router>
            </ThemeProvider>
        );

        expect(screen.getByLabelText('loading')).toBeInTheDocument();

        expect(screen.queryByText('Test Content')).not.toBeInTheDocument();
    });

    test('renders children when not loading', () => {
        mockUseCar.mockReturnValue({ isLoading: false });

        render(<DataWithSkeleton><div>Test Content</div></DataWithSkeleton>);

        const contentElement = screen.getByText('Test Content');
        expect(contentElement).toBeInTheDocument();

        const skeletonElement = screen.queryByLabelText('loading');
        expect(skeletonElement).not.toBeInTheDocument();
    });

    test('applies "ishidden" prop correctly', () => {
        mockUseCar.mockReturnValue({ isLoading: true });

        render(<DataWithSkeleton ishidden={'true'}><div>Test Content</div></DataWithSkeleton>);

        expect(screen.getByLabelText('container')).not.toBeVisible()
    });
});