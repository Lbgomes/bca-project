import { fireEvent, render, screen } from '@testing-library/react';
import VehicleItem from '.';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { mockVehicle } from 'mockData/mockVehicle';
import { act } from 'react';
import theme from 'styles/theme';


describe('VehicleItem Component', () => {

    it('calls handleFavourite when the favourite div is clicked', () => {
        const handleFavouriteMock = jest.fn();

        render(
            <ThemeProvider theme={theme}>
                <Router>
                    <VehicleItem
                        index={1}
                        vehicle={mockVehicle}
                        handleCarData={() => { }}
                        handleFavourite={handleFavouriteMock}
                        isFavorite={true}
                        page={1}
                    />
                </Router>
            </ThemeProvider>
        );

        const favouriteButton = screen.getByLabelText('favourite-button');
        fireEvent.click(favouriteButton);

        expect(handleFavouriteMock).toHaveBeenCalledWith(mockVehicle);
    });

    it('renders a favorite icon when the vehicle is a favorite', () => {
        act(() => {

            render(
                <ThemeProvider theme={theme}>
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
                <ThemeProvider theme={theme}>
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