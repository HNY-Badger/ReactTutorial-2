import axios from "axios"
import { ICar, ICarData } from "../types/car.interface";

export const CarService = {
    async getAll() {
        const response = await axios.get<ICar[]>('http://localhost:9000/cars')

        return response.data
    },

    async getById(id:string) {
        let data;
        const response = await fetch(`http://localhost:9000/car/${id}`)
        .then(response => response.json())
        .then(_data => {data = _data})
        return data
    },

    async create(data: ICarData){
        return axios.post('http://localhost:9000/addcar', data)
    }
}