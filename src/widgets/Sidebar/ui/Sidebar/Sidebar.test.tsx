import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "./Sidebar";
import {renderComponent} from "shared/lib/tests/renderComponent/renderComponent";


describe('Sidebar', () => {
    test('render test', () => {
        renderComponent(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    })
    test('sidebar toggle test', () => {
        renderComponent(<Sidebar/>)
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})