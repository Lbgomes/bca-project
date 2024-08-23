import { render, screen } from '@testing-library/react';
import VehicleItem from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mockTheme } from 'mockData/mockTheme';
import { mockVehicle } from 'mockData/mockVehicle';
import { act } from 'react';


describe('VehicleItem Component', () => {
    it('displays skeleton loaders when loading', () => {
        act(() => {
            render(
                <ThemeProvider theme={mockTheme}>
                    <Router>
                        <VehicleItem
                            index={1}
                            vehicle={mockVehicle}
                            handleCarData={() => { }}
                            handleFavourite={() => { }}
                            isFavorite={false}
                            page={1}
                        />
                    </Router>
                </ThemeProvider>
            );
        })
        expect(screen.getAllByLabelText('loading')).toHaveLength(5);
    });


    it('displays vehicle data after loading', async () => {
        act(() => {

            render(
                <ThemeProvider theme={mockTheme}>
                    <Router>
                        <VehicleItem
                            index={1}
                            vehicle={mockVehicle}
                            handleCarData={() => { }}
                            handleFavourite={() => { }}
                            isFavorite={false}
                            page={1}
                        />
                    </Router>
                </ThemeProvider>
            );
        })

        setTimeout(() => {
            expect(screen.getByText(/Toyota Corolla/i)).toBeInTheDocument();
            expect(screen.getByText(/The event will begin in 1 day/i)).toBeInTheDocument();
            expect(screen.getByText(/50000km/i)).toBeInTheDocument();
            expect(screen.getByText(/Starting Bid: 15000/i)).toBeInTheDocument();
        }, 1500);
    });

    it('renders a favorite icon when the vehicle is a favorite', () => {
        act(() => {

            render(
                <ThemeProvider theme={mockTheme}>
                    <Router>
                        <VehicleItem
                            index={1}
                            vehicle={mockVehicle}
                            handleCarData={() => { }}
                            handleFavourite={() => { }}
                            isFavorite={true}
                            page={1}
                        />
                    </Router>
                </ThemeProvider>
            );
        })

        expect(screen.getByLabelText('favourite')).toBeInTheDocument();
    });

    it('renders a regular heart icon when the vehicle is not a favorite', () => {
        act(() => {

            render(
                <ThemeProvider theme={mockTheme}>
                    <Router>
                        <VehicleItem
                            index={1}
                            vehicle={mockVehicle}
                            handleCarData={() => { }}
                            handleFavourite={() => { }}
                            isFavorite={false}
                            page={1}
                        />
                    </Router>
                </ThemeProvider>
            );
        })

        expect(screen.getByLabelText('non-favourite')).toBeInTheDocument();
    });
});