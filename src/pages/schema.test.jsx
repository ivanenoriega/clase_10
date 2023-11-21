import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Schema from "./schema";

describe('Home', () => {
    // Renders a form with two input fields and a submit button
    it('should render a form with two input fields and a submit button', async () => {
        render(<Schema />);
        expect(screen.getByRole('textbox', { name: 'Nombre:' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Apellido:' })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'Edad:' })).toBeInTheDocument();
        const button = screen.getByRole('button', { name: /submit/i })
        expect(button).toBeInTheDocument();
        fireEvent.click(button)
        await screen.findByText('name is a required field')
        await screen.findByText(/last_name is a required field/i)
    });

    // // Allows the user to input a name and age
    // it('Check the error message for required fields', async () => {
    //     const {container} = render(<Schema />);
    //     const nameInput = container.querySelector('#sandbox > div > main > form > p:nth-child(2) > input')
    //     const lastNameInput = screen.getByRole('textbox', { name: 'last_name' });
    //     const ageInput = screen.getByRole('textbox', { name: /age/i });
  
    //     userEvent.type(nameInput, 'John');
    //     userEvent.type(lastNameInput, 'Doe');
    //     userEvent.type(ageInput, '25');
  
    //     expect(nameInput).toHaveValue('John');
    //     expect(lastNameInput).toHaveValue('Doe');
    //     expect(ageInput).toHaveValue('25');
    // });
});

