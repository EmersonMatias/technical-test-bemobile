import "@testing-library/jest-dom"
import Header from "./header"
import { render, screen } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { StyledThemeProvider } from "../../util/custom-render"

describe("Header Component", () => {
 
    beforeEach(() => {
        render(<StyledThemeProvider><Header /></StyledThemeProvider>)
    })

    it("should render an image", async() => {
      const image = screen.getByAltText("Logo")
       expect(image).toBeInTheDocument()
    })

    it("should render the header", async() => {
       const header = screen.getByTestId("header")
       expect(header).toBeInTheDocument()
     })

  
})