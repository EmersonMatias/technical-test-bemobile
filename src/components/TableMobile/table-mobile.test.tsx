import "@testing-library/jest-dom"
import TableMobile from "./table-mobile"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { StyledThemeProvider } from "../../util/custom-render"
import { Employees } from "../../types/types"

describe("Table Line", () => {
    const employees: Employees[] = [{
        "id": 1,
        "name": "João",
        "job": "Back-end",
        "admission_date": "2019-12-02T00:00:00.000Z",
        "phone": "5551234567890",
        "image": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
    },
    {
        "id": 2,
        "name": "Roberto",
        "job": "Front-end",
        "admission_date": "2020-03-12T00:00:00.000Z",
        "phone": "5550321654789",
        "image": "https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png"
    }]

    beforeEach(() => {
        render(<StyledThemeProvider><TableMobile employees={employees} /></StyledThemeProvider>)
    })

    it("should render the component", async () => {
        const component = screen.getByTestId("table-mobile")
        const photoTh = screen.getByText("FOTO")
        const nameTh = screen.getByText("NOME")
        const moreTh = screen.getByText("●")
        const name = screen.getByText("João")

        expect(component).toBeInTheDocument()
        expect(photoTh).toBeInTheDocument()
        expect(nameTh).toBeInTheDocument()
        expect(moreTh).toBeInTheDocument()
        expect(name).toBeInTheDocument()
    })

})