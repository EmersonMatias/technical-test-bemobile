import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { StyledThemeProvider } from "../../util/custom-render"
import TableLine from "./table-line"
import { Employees } from "../../types/types"

describe("Table Line", () => {
    const employee: Employees = {
        "id": 1,
        "name": "João",
        "job": "Back-end",
        "admission_date": "2019-12-02T00:00:00.000Z",
        "phone": "5551234567890",
        "image": "https://img.favpng.com/25/7/23/computer-icons-user-profile-avatar-image-png-favpng-LFqDyLRhe3PBXM0sx2LufsGFU.jpg"
    }

    beforeEach(() => {
        render(<StyledThemeProvider><TableLine {...employee} /></StyledThemeProvider>)
    })

    it("should render the component", () => {
        const photo = screen.getByAltText("Foto")
        const name = screen.getByText("João")
        const downIcon = screen.getByAltText("DownArrow Icon")

        expect(downIcon).toBeInTheDocument()
        expect(photo).toBeInTheDocument()
        expect(name).toBeInTheDocument()
    })

    it("should render data when clicking downArrow icon ", () => {
        const downIcon = screen.getByAltText("DownArrow Icon")
        fireEvent.click(downIcon)

        const cargo = screen.getByText("Cargo")
        const job = screen.getByText("Back-end")
        const date = screen.getByText("Data de admissão")
        const admission_date = screen.getByText("02/12/2019")
        const phone = screen.getByText("Telefone")
        const phoneFormated= screen.getByText("+55 (51) 23456-7890")

        expect(cargo).toBeInTheDocument()
        expect(job).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(admission_date).toBeInTheDocument()
        expect(phone).toBeInTheDocument()
        expect(phoneFormated).toBeInTheDocument()
    })
})