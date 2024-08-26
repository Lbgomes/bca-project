import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Routes from './';


jest.mock('pages/home', () => () => <div>Home Page</div>);
jest.mock('pages/car', () => () => <div>Car Page</div>);

describe('Routes Component', () => {

    const renderWithRouter = (route: string) => {
        return render(
            <MemoryRouter initialEntries={[route]}>
                <Routes />
            </MemoryRouter>
        );
    };

    it('should render the Home component when navigating to "/"', () => {
        renderWithRouter('/');
        expect(screen.getByText(/Home Page/i)).toBeInTheDocument();
    });

    it('should render the Car component when navigating to "/:index"', () => {
        renderWithRouter('/1');
        expect(screen.getByText(/Car Page/i)).toBeInTheDocument();
    });

    it('should render the Car component when navigating to any dynamic route "/:index"', () => {
        renderWithRouter('/2');
        expect(screen.getByText(/Car Page/i)).toBeInTheDocument();
    });
});