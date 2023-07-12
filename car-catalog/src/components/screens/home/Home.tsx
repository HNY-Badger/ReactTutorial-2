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
import Header from '../../ui/Header'
import Catalog from '../../ui/Catalog'

function Home() {
    const {data, isLoading} = useQuery(['cars'], () => CarService.getAll())

    if(isLoading) return <p>Loading...</p>

    return (
      <div>
        <h1>Cars catalog</h1>
        <Header />
        <CreateCarForm/>
        <Catalog data={data}/>
      </div>
    )
  }
  
  export default Home