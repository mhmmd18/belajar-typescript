export interface Employee {
    id: number
    name: string
    address: string
}

export interface Manager extends Employee {
    department: string
}