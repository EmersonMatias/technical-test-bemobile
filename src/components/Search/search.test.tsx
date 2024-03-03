import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { StyledThemeProvider } from "../../util/custom-render"
import Search from "./search"


describe("Search Component", () => {
    const setFilter = vi.fn()

    beforeEach(() => {
        render(<StyledThemeProvider><Search filter="" setFilter={setFilter} /></StyledThemeProvider>)
    })

    it("should render an image", () => {
        const image = screen.getByAltText("Magnifying Icon")
        expect(image).toBeInTheDocument()
    })

    it("should render an input", () => {
        const image = screen.getByPlaceholderText("Pesquisar")
        expect(image).toBeInTheDocument()
    })

    it("should render search container", () => {
        const container = screen.getByTestId("search-container")
        expect(container).toBeInTheDocument()
    })

    it("should call setFilter with the input value when the input value changes", () => {

        const inputElement = screen.getByPlaceholderText('Pesquisar');
        fireEvent.change(inputElement, { target: { value: 'example' } });

        expect(setFilter).toHaveBeenCalledWith("example");
    })





})