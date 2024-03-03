import { useState } from "react"
import Header from "./components/Header/header"
import { Container } from "./style"
import Search from "./components/Search/search"

function App() {
  const [filter, setFilter] = useState('')

  return (
    <Container data-testid="app">
       <Header />

       <div className="search-container">
        <h1>Funcionários</h1>
        <Search filter={filter} setFilter={setFilter} />
      </div>
    </Container>
  )
}

export default App
