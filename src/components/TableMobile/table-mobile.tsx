import { TableProps } from "../../types/types"
import TableLine from "../TableLine/table-line"
import { Container } from "./style"

export default function TableMobile({ employees }: Readonly<TableProps>) {

    return (
        <Container data-testid="table-mobile">
            <table>
                <thead>
                    <tr>
                        <th >FOTO</th>
                        <th >NOME</th>
                        <th >●</th>
                    </tr>
                </thead>

                <tbody>
                    {employees?.map((employee) => {
                        return (<TableLine key={employee.id} {...employee}/>)
                    })}
                </tbody>
            </table>
        </Container>
    )
}

