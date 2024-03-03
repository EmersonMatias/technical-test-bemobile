import { Container } from "./style";
import Logo from "../../assets/svg/Logo.svg"

export default function Header(){
    return(
      <Container data-testid="header">
        <img src={Logo} width={44} alt="Logo" />
      </Container>
    )
}