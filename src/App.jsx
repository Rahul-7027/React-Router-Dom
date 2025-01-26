import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './component/pages/Home/HomePage'
import AboutPage from "./component/pages/About/AboutPage"
import ContactPage from "./component/pages/Contact/ContactPage"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/about",
      element: <AboutPage />
    },
    {
      path: "/contact",
      element: <ContactPage />
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
