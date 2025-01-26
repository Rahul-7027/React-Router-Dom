import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './component/pages/Home/HomePage'
import AboutPage from "./component/pages/About/AboutPage"
import ContactPage from "./component/pages/Contact/ContactPage"
import AppLayout from './component/layout/AppLayout'
import Error from './component/pages/HandlingError/Error'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<Error/>,
      children: [
        {
          path: "/about",
          element: <AboutPage />
        },
        {
          path: "/contact",
          element: <ContactPage />
        },
        {
          path: "/",
          element: <HomePage />
        }
      ]
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
