import { createContext } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ({ props }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(false)

    const value = {
        backendUrl
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}