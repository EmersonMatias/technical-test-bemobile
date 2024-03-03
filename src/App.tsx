import { useState } from "react"
import Header from "./components/Header/header"
import { Container } from "./style"
import Search from "./components/Search/search"
import TableDesktop from "./components/TableDesktop/table-desktop"
import filterEmployees from "./util/filterEmployees"
import { useGetEmployees } from "./hooks/useEmployers"

function App() {
  const { data, isSuccess } = useGetEmployees()
  const [filter, setFilter] = useState('')
  const employees = filterEmployees(filter, data)

  return (
    <Container data-testid="app">
      <Header />

      <div className="search-container">
        <h1>Funcionários</h1>
        <Search filter={filter} setFilter={setFilter} />
      </div>

      {isSuccess && <TableDesktop employees={employees} />}

    </Container>
  )
}

export default App
