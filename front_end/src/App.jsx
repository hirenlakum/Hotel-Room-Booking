import { Outlet } from "react-router-dom"
import RoomProvider from "../store/roomStore"

function App() {





  return (
    <>
 
   <RoomProvider>

  
     <Outlet/>
    
     </RoomProvider>
    </>
  )
}

export default App
