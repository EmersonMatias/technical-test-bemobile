import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { Employees } from "../types/types";

export function useGetEmployees(){
    return useQuery({
        queryKey: ["employees"],
        queryFn: async () => {
            const response: AxiosResponse<Employees[]> = await axios.get("http://localhost:3000/employees")
            
            return response.data
        } 
    })
}