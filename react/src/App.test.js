import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter

describe('App Routing', () => {
    test('renders Event Details page', () => {
        render(
            <MemoryRouter initialEntries={['/event-details']}>
                <App />
            </MemoryRouter>
        );
        // Assuming "Event Details" is just text within a div or span
        const allElements = screen.getAllByText(/Event Details/i);
        const eventDetailsTitle = allElements.find(element => element.className === "event-details-title")
        expect(eventDetailsTitle).toBeInTheDocument();
    });
});


