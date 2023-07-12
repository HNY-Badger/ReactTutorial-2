import { Component, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export const withAuth = (Component) => (props) => {
    const {user} = useContext(AuthContext)

    if (!user) return <p>You are not authorized</p>
    return <Component {...props} />
}