import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'

function App() {

  return (
    <section className=''>
      <RouterProvider router={routes}></RouterProvider>
    </section>
  )
}

export default App
