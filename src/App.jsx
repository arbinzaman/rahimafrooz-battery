import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <section className=''>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster/>
    </section>
  )
}

export default App
