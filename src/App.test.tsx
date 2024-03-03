import "@testing-library/jest-dom"

import { fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { StyledThemeProvider } from "./util/custom-render"
import App from "./App"
import { useGetEmployees } from "./hooks/useEmployers"
import { wrapper } from "./util/wrapper"
describe("Table Line", () => {


    beforeEach(() => {
        render(<StyledThemeProvider><App /></StyledThemeProvider>)
    })

    it("should render the component", async () => {
        const header = screen.getAllByTestId("header")
        const app = screen.getAllByTestId("app")
        const title = screen.getAllByText("Funcionários")

        expect(header[0]).toBeInTheDocument()
        expect(app[0]).toBeInTheDocument()
        expect(title[0]).toBeInTheDocument()
    })

    it("should render table when query is Success", async () => {
        const { result } = renderHook(() => useGetEmployees(), { wrapper });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        screen.getAllByTestId("table-desktop")
        screen.getAllByTestId("table-mobile")
    })

    it("should rens", async () => {
        const input = screen.getByPlaceholderText("Pesquisar")
        fireEvent.change(input, { target: { value: 'João' } })

        await waitFor(() => {
            const name = screen.getAllByText("João")
            expect(name[0]).toBeInTheDocument()
        })
    })
})