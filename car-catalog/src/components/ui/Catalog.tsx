import CarItem from "../screens/home/car-item/Caritem"
import { ICar } from "../../types/car.interface"
import { FC } from "react"

interface ICatalog {
    data?: ICar[],
}

const Catalog: FC<ICatalog> = ({data = []}) => {
    return (
        <div>
            {data.length ? data.map(car => (
                <CarItem key={car.id} car={car}/>
            ))
            :  <p>There are no cars</p>}
        </div>
    )
}

export default Catalog