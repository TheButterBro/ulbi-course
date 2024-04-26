import {renderComponent} from "shared/lib/tests/renderComponent/renderComponent";
import {screen} from "@testing-library/react";
import {Counter} from "./Counter";
import {userEvent} from "@storybook/testing-library";

describe('Counter.test', () => {
    test('render with selector', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value : 10 } }
        })
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    })

    test('increment test', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value : 10 } }
        })
        userEvent.click(screen.getByTestId('btn-increment'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    })

    test('decrement test', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value : 10 } }
        })
        userEvent.click(screen.getByTestId('btn-decrement'))
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    })
})