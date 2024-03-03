export interface Employees {
    id: number,
    image: string,
    job: string,
    name: string,
    phone: string,
    admission_date: string
}

export interface TableProps {
    readonly employees: Employees[] | undefined
}