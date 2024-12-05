import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Favourites from './pages/Favourites.jsx'
import Recipes from './pages/Recipes.jsx'
import Navbar from './pages/NavBar.jsx'
import About from './pages/ABout.jsx'

const favourites = [];

const paths = createBrowserRouter([
  {
    path: '/',
    element: 
    <>
      <Navbar></Navbar>
      <Home></Home>
    </>
  },
  {
    path: '/favourites',
    element: 
    <>
      <Navbar></Navbar>
      <Favourites favourites = {favourites}></Favourites>
    </>
  },
  {
    path: '/recipes',
    element:
    <>
      <Navbar></Navbar>
      <Recipes favourites={favourites}></Recipes>
    </>
  },
  {
    path: '/about',
    element:
    <>
      <Navbar></Navbar>
      <About></About>
    </>
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {paths}></RouterProvider>
  </StrictMode>,
)
