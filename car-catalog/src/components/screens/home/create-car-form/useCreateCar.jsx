import { useQueryClient, useMutation } from "@tanstack/react-query"
import { CarService } from "../../../../services/car.service"

export const useCreateCar = (reset) => {
    const queryClient = useQueryClient()

    const {mutate} = useMutation(['create car'], (data) => CarService.create(data), 
    {onSuccess : () => {
        queryClient.invalidateQueries('cars')
        reset()
    }})

    const createCar = data => {
        mutate(data)
    }

    return { createCar }
}