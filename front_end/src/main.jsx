import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import Home from "./components/Home.jsx"
import Availability from './components/Availability.jsx'
import Rooms from "./components/Rooms.jsx"
import Facility from './components/Facility.jsx'
import AboutUs from './components/AboutUs.jsx'
import Teams from './components/Teams.jsx'
import ContactUs from "./components/ContactUs.jsx"
import REstaurantBar from './components/REstaurantBar.jsx'
import Service from './components/Service.jsx'
import SignIn from './components/SignIn.jsx'
import SignUp from './components/SignUp.jsx'
import Admin from './components/Admin.jsx'
import AdminDashBoard from './components/AdminDashBoard.jsx'
import Manage_user from './components/Manage_user.jsx'
import Manage_Rooms from './components/Manage_Rooms.jsx'
import AllRooms from './components/AllRooms.jsx'
import Profile from './components/Profile.jsx'
import Loader from './components/Loader.jsx'
import AddRoom from './components/AddRoom.jsx'
import UpdateRoom from './components/UpdateRoom.jsx'
import BookRoom from './components/BookRoom.jsx'


const router = createBrowserRouter([
  {
    path:"/",element:<App/>,
    children:[
      {
        index:true,element:<Home/>
      },
      {
        path:"/availability",element:<Availability/>
      },
      {
        path:"/rooms",element:<Rooms/>
      },
      {
     path:"/facility",element:<Facility/>
      },
      {
     path:"/aboutus",element:<AboutUs/>
      },
      {
        path:"/team",element:<Teams/>
      },
      {
        path:"/contactus",element:<ContactUs/>
      },
      {
    path:"/restaurantbar",element:<REstaurantBar/>
      },
      {
     path:"/service",element:<Service/>
      },
      {
     path:"/signin",element:<SignIn/>
      },
      {
     path:"/singup",element:<SignUp/>
      },
      {
     path:"/admin",element:<Admin/>
      },
      {
      path:"/admindashboard",element:<AdminDashBoard/>
      },
      {
path:"/manageuser",element:<Manage_user/>
      },
      {
     path:"/managerooms",element:<Manage_Rooms/>
      },
      {
      path:"/allrooms",element:<AllRooms/>
      },
      {
     path:"/profile",element:<Profile/>
      },
      {

        path:"/loader",element:<Loader/>
      },
      {
      path:"/addroom",element:<AddRoom/>
      },
      {
      path:"/updateroom/:id",element:<UpdateRoom/>
      },
      {
        path:"/bookroom/:id",element:<BookRoom/>
      }
    
    
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
