import {fireEvent, getByTestId, render, screen} from "@testing-library/react"
import {Sidebar} from "widgets/Sidebar";
import {RenderWithTranslation} from "shared/lib/test/renderWithTranslation/renderWithTranslation";


describe("Sidebar" , () => {
    test("to be in document" , () => {
        RenderWithTranslation(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        // screen.debug()
    })

    test("collapse sidebar" , () => {
        RenderWithTranslation(<Sidebar/>)
        const collapsedBtn = screen.getByTestId('sidebar-collapsed')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(collapsedBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('SidebarCollapsed')

    })
})
