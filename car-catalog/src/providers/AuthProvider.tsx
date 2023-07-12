import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";
import { TypeUser } from "../types/user.interface";
import { FC } from "react"

type TypeContext = {
    user: TypeUser,
    setUser: Dispatch<SetStateAction<TypeUser>>
}

export const AuthContext = createContext<TypeContext>({
    user: null,
    setUser: () => {}
})

const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const [user, setUser] = useState<TypeUser>(null)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider