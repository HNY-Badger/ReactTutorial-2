import axios from "axios"

export const CarService = {
    async getAll() {
        const response = await axios.get('http://localhost:9000/cars')

        return response.data
    },

    async getById(id) {
        let data;
        const response = await fetch(`http://localhost:9000/car/${id}`)
        .then(response => response.json())
        .then(_data => {data = _data})
        return data
    }
}