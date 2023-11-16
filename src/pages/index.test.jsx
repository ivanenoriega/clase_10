import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from ".";

describe('Home', () => {
    // Renders a form with two input fields and a submit button
    it('should render a form with two input fields and a submit button', () => {
        render(<Home />);
        expect(screen.getByLabelText('Nombre:')).toBeInTheDocument();
        expect(screen.getByLabelText('Edad:')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    });

    // Allows the user to input a name and age
    it('Check the error message for required fields', async () => {
        render(<Home />);
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }))
        await screen.findByText(/nombre es obligatorio/i)
    });
});

