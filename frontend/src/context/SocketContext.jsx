import { useState, createContext,useContext,useEffect  } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"
//eslint-disable-next-line react-refresh/only-export-components
export const SockectContext = createContext()

//eslint-disable-next-line react-refresh/only-export-components
export const useSocketContext = () => {
    return useContext(SockectContext)
}

export const SockectContextProvider = ({ children }) => {

    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const { authUser } = useAuthContext()

    useEffect(()=>{
        if (authUser) {
            const socket = io(window.location.origin, {
                query: {
                    userId: authUser._id
                }
            })
            
            setSocket(socket)

            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users)
            })

            return ()=> socket.close()
        } else {
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    },[authUser])

    return <SockectContext.Provider value={{socket, onlineUsers}}>{children}</SockectContext.Provider>
}