import { TableProps } from "../../types/types";
import formatDate from "../../util/formatDate";
import formatPhoneNumber from "../../util/formatPhoneNumber";
import { Container } from "./style";

export default function TableDesktop({ employees }: Readonly<TableProps>) {
    return (
        <Container data-testid="table-desktop">
            <table>

                <thead>
                    <tr>
                        <th >FOTO</th>
                        <th >NOME</th>
                        <th >CARGO</th>
                        <th >DATA DE ADMISSÃO</th>
                        <th>TELEFONE</th>
                    </tr>
                </thead>

                <tbody>
                    {employees?.map(({ id, job, image, name, phone, admission_date }) => {
                        return <tr key={id}>
                            <td>
                                <img src={image} alt="Foto de Usuário" />
                            </td>
                            <td>{name}</td>
                            <td>{job}</td>
                            <td >{formatDate(admission_date)}</td>
                            <td >{formatPhoneNumber(phone)}</td>
                        </tr>
                    })}
                </tbody>

            </table>
        </Container>
    )
}