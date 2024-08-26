import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import VehicleList from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { mockList } from 'mockData/mockList';
import { act } from 'react';

jest.mock('context/car', () => ({
    useCar: () => ({
        handleCarData: jest.fn(),
    }),
}));

describe('VehicleList Component', () => {
    it('renders the list of vehicles', () => {
        act(() => {
            render(
                <ThemeProvider theme={theme}>
                    <Router>
                        <VehicleList
                            page={1}
                            currentItems={mockList}
                            favorites={mockList.filter(vehicle => vehicle.favourite)}
                            handleFavourite={jest.fn()}
                        />
                    </Router>
                </ThemeProvider>
            );
        });

        mockList.forEach(vehicle => {
            setTimeout(() => {
                expect(screen.getByText(new RegExp(`${vehicle.make} ${vehicle.model}`, 'i'))).toBeInTheDocument();
            }, 1000);
        });

    });

    it('correctly identifies and renders favourite vehicles', () => {
        act(() => {

        render(
            <ThemeProvider theme={theme}>
                <Router>
                    <VehicleList
                        page={1}
                        currentItems={mockList}
                        favorites={mockList.filter(vehicle => vehicle.favourite)}
                        handleFavourite={jest.fn()}
                    />
                </Router>
            </ThemeProvider>
        );
    });
        const favoriteVehicles = mockList.filter(vehicle => vehicle.favourite);
        favoriteVehicles.forEach(vehicle => {
            const favoriteButton = screen.getAllByLabelText('favourite')
            expect(favoriteButton).toHaveLength(2)
        });
    });

});
