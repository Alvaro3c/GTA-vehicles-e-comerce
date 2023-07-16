import React, { createContext, useContext } from "react"


const UserContext = createContext({
    user: undefined,
    isAuthenticated: Boolean,
    setUser: undefined
})
export const useUserContext = () => useContext(UserContext)

export default UserContext