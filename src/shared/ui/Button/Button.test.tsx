import {render, screen} from "@testing-library/react"
import {Button, ThemeButton} from "./Button";


describe("Button tsx" , () => {
    test("button test" , () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test("button class test" , () => {
        render(<Button theme={ThemeButton.CLEAR} >TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })

})
