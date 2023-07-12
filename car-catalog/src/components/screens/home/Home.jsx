import styles from './Home.module.css'
import CarItem from './car-item/Caritem'
import CreateCarForm from './create-car-form/CreateCarForm'
import VideoPlayer from './Player.jsx'

import axios from 'axios'

import {cars as carsData} from './cars.data.js'
import { useCallback, useContext, useEffect, useState } from 'react'
import { CarService } from '../../../services/car.service'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider'
import { useQuery } from '@tanstack/react-query'

function Home() {
    const {data, isLoading} = useQuery(['cars'], () => CarService.getAll())

    const {user, setUser} = useContext(AuthContext)

    if(isLoading) return <p>Loading...</p>

    return (
      <div>
        <h1>Cars catalog</h1>

        {user ? (<>
        <h2>Welcome, {user.name}!</h2>
        <button onClick={() => setUser(null)}>Logout</button>
        </>) : 
        <button onClick={() => setUser({name: "Max"})}>Login</button>}

        <CreateCarForm/>
        <div>
            {data.length ? data.map(car => (
                <CarItem key={car.id} car={car}/>
            ))
            :  <p>There are no cars</p>
        }
        </div>
      </div>
    )
  }
  
  export default Home