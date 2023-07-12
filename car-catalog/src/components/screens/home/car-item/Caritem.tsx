import styles from '../Home.module.css'
import { Link } from 'react-router-dom'
import Price from './Price'
import { useState } from 'react'
import { ICar } from '../../../../types/car.interface'

function CarItem({car}: {car: ICar}) {
    const [count, setCount] = useState(0)

    return (
        <div key={car.id} className={styles.item}>
            <div 
            className={styles.image}
            style={{
                backgroundImage: `url(${car.image})`,
            }}/>
            <div className={styles.info}>
                <h2>{car.name}</h2>
                <button onClick={() => setCount(prev => prev + 1)}>Click</button>
                <Price price={car.price}/>
                <Link className="btn" to={`/car/${car.id}`}>Read more</Link>
                <div>Line</div>
            </div>
        </div>
    )
}

export default CarItem