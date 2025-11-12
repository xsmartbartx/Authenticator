import { createContext } from "react";
import { data } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext(null);

export const AppContextProvider = ({ props }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUserData] = useState(false)

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/data')
            data.succes ? setUserData(data.user) : setUserData : toast.error(data.
            message)
        } catch (error) {
            toast.error(data.message)
        }

    const value = {
        backendUrl,
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUserData,
        getUserData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}