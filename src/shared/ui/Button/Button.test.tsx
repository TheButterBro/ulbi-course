import {render, screen} from '@testing-library/react'
import {Button, ButtonTheme} from "shared/ui/Button/Button";

describe('Button', () => {
    test('render test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    })
    test('with invisible theme', () => {
        render(<Button theme={ButtonTheme.INVISIBLE}>TEST</Button>);
        expect(screen.getByText('TEST'))
        screen.debug()
    })
})