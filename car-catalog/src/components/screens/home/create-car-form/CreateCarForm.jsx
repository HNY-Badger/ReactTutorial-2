import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './CreateCarForm.module.css'

const CreateCarForm = ({setCars}) => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'onChange'
    })

    const createCar = data => {
        setCars(prev => [...prev, {id: prev.length + 1, ...data}])

        reset()
    }

    return <form className={styles.form} onSubmit={handleSubmit(createCar)}>
        <input 
            {...register('name', { required: 'Name is required' })}
            placeholder="Name" 
        />
        {errors?.name?.message && <p style={{color: 'red'}}>Name is required</p>}
        <input 
            {...register('price', { required: true })}
            placeholder="Price"
        />
        <input 
            {...register('image', { required: true })}
            placeholder="Image"
        />

        <button className='btn'>Create</button>
    </form>
}

export default CreateCarForm