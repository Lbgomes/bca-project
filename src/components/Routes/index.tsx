import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Car from 'pages/car';

export default function Routes() {
    return (
        <ReactRouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/:index" element={<Car />} />
        </ReactRouterRoutes>
    );
}