import formatDate from "../../util/formatDate"
import formatPhoneNumber from "../../util/formatPhoneNumber"
import DownArrow from "../../assets/svg/DownArrow.svg"
import { Employees } from "../../types/types"
import { useState } from "react"

export default function TableLine(employee: Readonly<Employees>) {
    const [details, setDetails] = useState(false)
    const { image, name, job, phone, admission_date } = employee
    
    return (
        <>
            <tr>
                <td>
                    <img src={image} alt="Foto" />
                </td>
                <td>{name}</td>
                <td onClick={() => setDetails(!details)}><img src={DownArrow} alt="DownArrow Icon" /></td>
            </tr>
            {details && (
                <tr>
                    <td className="details-container" colSpan={3}>
                        <div className="details">
                            <h2>Cargo</h2>
                            <h3>{job}</h3>
                        </div>
                        <div className="details">
                            <h2>Data de admissão</h2>
                            <h3>{formatDate(admission_date)}</h3>
                        </div>
                        <div className="details">
                            <h2>Telefone</h2>
                            <h3>{formatPhoneNumber(phone)}</h3>
                        </div>
                    </td>
                </tr>
            )
            }
        </>
    )
}