import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/homepage.jsx'
import Dashboardpage from './routes/dashboardpage/dashboardpage.jsx'
import Chatpage from './routes/chatpage/chatpage.jsx'
import RootLayout from './layouts/rootLayout/rootLayout.jsx'
import DashboardLayout from './layouts/dashboardLayout/dashboardLayout.jsx'
import Signinpage from './routes/signinpage/signinpage.jsx'
import SignUpPage from './routes/signupPage/signupPage.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children:[
      {
        path:"/", 
        element:<Homepage/>,
      },
      {
        path:"/sign-in/*", 
        element:<Signinpage/>,
      },
      {
        path:"/sign-up/*", 
        element:<SignUpPage/>,
      },
      {
        element: <DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<Dashboardpage/>,
          },
          {
            path:"/dashboard/chats/:id",
            element:<Chatpage/>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
