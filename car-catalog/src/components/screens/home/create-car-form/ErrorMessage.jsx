const ErrorMessage = ({error}) => {
    if (!error) return null
    return (<p style={{color: 'red'}}>Name is required</p>)
}

export default ErrorMessage