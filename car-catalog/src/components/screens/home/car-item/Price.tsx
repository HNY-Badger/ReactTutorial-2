import React from "react"
import { FC } from "react"

const Price: FC<{price: string}> = ({price}) => {
    return (
        <p>{new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(+price)}
        </p>
    )
}

export default React.memo(Price)