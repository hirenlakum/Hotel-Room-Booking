import { Outlet } from "react-router-dom"
import RoomProvider from "../store/roomStore"
import { Toaster } from "react-hot-toast"


function App() {





  return (
    <>
 
   <RoomProvider>
 <Toaster/>
  
     <Outlet/>
    
     </RoomProvider>
    </>
  )
}

export default App
