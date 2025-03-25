
import './App.css'
import Startgame from './components/Startgame'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Playgame from './components/Playgame'
import Layout from './Layout'


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Startgame />} />
        <Route path='playgame' element={<Playgame />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
