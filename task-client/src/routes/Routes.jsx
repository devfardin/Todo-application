import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import DashboardLayout from '../layouts/DashboardLayout'
import MyTaskes from '../Dashboard/Pages/My-task/MyTaskes'
import Private from '../components/PrivatePage/Private'
import ProcessTask from '../Dashboard/Pages/ProcessTask/ProcessTask'
import CompleteTask from '../Dashboard/Pages/CompleteTask/CompleteTask'
import CloseTask from '../Dashboard/Pages/CloseTask/CloseTask'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },

    ],
  },
  {
    path:'dashboard',
    element: <DashboardLayout/>,
   children: [
   {
    path: 'my-task',
    element:<Private><MyTaskes/></Private>
   },
   {
    path: 'process-task',
    element: <Private><ProcessTask/></Private>
   },
   {
    path: 'complete-task',
    element: <Private><CompleteTask/></Private>
   },
   {
    path: 'close-task',
    element: <Private><CloseTask/></Private>
   },

 
   ]
  
  }

])
