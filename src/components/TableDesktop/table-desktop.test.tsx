import "@testing-library/jest-dom"
import TableDesktop from "./table-desktop"
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
        render(<StyledThemeProvider><TableDesktop employees={employees} /></StyledThemeProvider>)
    })

    it("should render the component", async () => {
        const component = screen.getByTestId("table-desktop")
        const photoTh = screen.getByText("FOTO")
        const nameTh = screen.getByText("NOME")
        const jobTh = screen.getByText("CARGO")
        const dateTh = screen.getByText("DATA DE ADMISSÃO")
        const phoneTh = screen.getByText("TELEFONE")
        const name = screen.getByText("João")
        const job = screen.getByText("Back-end")
        const date = screen.getByText("02/12/2019")
        const phone = screen.getByText("+55 (51) 23456-7890")

        expect(component).toBeInTheDocument()
        expect(photoTh).toBeInTheDocument()
        expect(nameTh).toBeInTheDocument()
        expect(jobTh).toBeInTheDocument()
        expect(dateTh).toBeInTheDocument()
        expect(phoneTh).toBeInTheDocument()
        expect(name).toBeInTheDocument()
        expect(job).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(phone).toBeInTheDocument()
    })

})