import { Container } from "./style";
import Magnifying from "../../assets/svg/Magnifying.svg"

export default function Search({ filter, setFilter }: SearchProps) {
    return (
        <Container data-testid="search-container">
            <input type="text" placeholder="Pesquisar" value={filter} onChange={(e) => setFilter(e.target.value)}/>
            <img src={Magnifying} alt="Magnifying Icon" />
        </Container>
    )
}

interface SearchProps {
    readonly filter: string
    readonly setFilter: React.Dispatch<React.SetStateAction<string>>
}