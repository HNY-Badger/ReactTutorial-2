import { FC } from "react"

const ErrorMessage:FC<{error?: string}> = ({error}) => {
    if (!error) return null
    return (<p style={{color: 'red'}}>Name is required</p>)
}

export default ErrorMessage