import { render, screen, waitFor } from '@testing-library/react';
import { VehicleData } from './';
import { useCar } from 'context/car';
import '@testing-library/jest-dom/extend-expect';
import { mockVehicle } from 'mockData/mockVehicle';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

jest.mock('context/car', () => ({
    useCar: jest.fn(),
}));

describe('VehicleData Component', () => {
    const mockUseCar = useCar as jest.Mock;;

    beforeEach(() => {
        mockUseCar.mockReturnValue({
            handleIsLoading: jest.fn(),
            handleFavourite: jest.fn(),
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders vehicle information correctly', async () => {
        render(
            <ThemeProvider theme={theme}>
                <Router>
                    <VehicleData vehicle={mockVehicle} isFavorite={false} />
                </Router>
            </ThemeProvider>
        );

        expect(screen.getByText(/Toyota/i)).toBeInTheDocument();
        expect(screen.getByText(/2023/i)).toBeInTheDocument();
        expect(screen.getByText(/petrol/i)).toBeInTheDocument();
        expect(screen.getByText(/1.6L/i)).toBeInTheDocument();
        expect(screen.getByText(/Manual/i)).toBeInTheDocument();
        expect(screen.getByText(/5.090/i)).toBeInTheDocument();
    });

    it('calculates and displays time left correctly', async () => {
        render(<ThemeProvider theme={theme}>
            <Router>
                <VehicleData vehicle={mockVehicle} isFavorite={false} />
            </Router>
        </ThemeProvider>
        );

        await waitFor(() => {
            expect(screen.getByText('This event will begin in')).toBeInTheDocument();
        });
    });

    it('displays a message when the event has started', async () => {
        const pastVehicle = {
            ...mockVehicle,
            auctionDateTime: new Date(Date.now() - 3600000).toISOString()
        };

        render(<ThemeProvider theme={theme}>
            <Router>
                <VehicleData vehicle={pastVehicle} isFavorite={false} />
            </Router>
        </ThemeProvider>);

        await waitFor(() => {
            expect(screen.getByText('This event has started')).toBeInTheDocument();
        });
    });

    it('renders element on home page', () => {
        render(
            <ThemeProvider theme={theme}>
                <Router>
                    <VehicleData vehicle={mockVehicle} isFavorite={false} page='home' />
                </Router>
            </ThemeProvider>
        )

        expect(screen.getByLabelText('specification')).toBeVisible();
    })
    it('not renders element on car page', () => {
        render(
            <ThemeProvider theme={theme}>
                <Router>
                    <VehicleData vehicle={mockVehicle} isFavorite={false} page='car' />
                </Router>
            </ThemeProvider>
        )

        expect(screen.getByLabelText('specification')).not.toBeVisible();
    })

});