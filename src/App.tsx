import { ToastContainer } from 'react-toastify'
import useRouteElement from './useRouteElemant'

function App() {
  const route = useRouteElement()
  return (
    <>
      <div className='App'>{route}</div>
      <ToastContainer />
    </>
  )
}

export default App
