import CarItem from "../screens/home/car-item/Caritem"

const Catalog = ({data}) => {
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