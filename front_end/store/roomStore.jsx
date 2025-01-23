import { createContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export const RoomContext = createContext()





const RoomProvider = ({children}) => {


    const [rooms,setRooms] = useState([])

    useEffect(()=>{

        axios.get("http://localhost:3011/getrooms")
        .then(user => {
            setRooms(user.data)
           
        })
        .catch(err => {
            console.log(err)
        })
    
    },[])

    
    
   

    return <RoomContext.Provider value={{
        rooms
    }}>

        {children}

        </RoomContext.Provider>
    

}

export default RoomProvider