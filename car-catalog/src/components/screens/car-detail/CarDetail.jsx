import { Link, useParams } from "react-router-dom"
import { CarService } from "../../../services/car.service"
import { useState, useEffect, useContext } from "react"
import CarItem from "../home/car-item/Caritem"
import { AuthContext } from "../../../providers/AuthProvider"
import { withAuth } from "../../../HOC/withAuth"

const CarDetail = () => {
    const {id} = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if(!id) return
        
        const fetchData = async () => {
          const data = await CarService.getById(id)
  
          setCar(data)
        }
  
        fetchData()
      }, [id])

    if (!car.name) return <p>Loading...</p>

    return (<div>
        <Link className="btn" to="/">Back</Link>
        <CarItem car={car} />
    </div>
    )
}

export default withAuth(CarDetail)