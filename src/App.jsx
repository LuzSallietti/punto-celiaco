import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import PointCreate from './routes/PointCreate'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/puntos/crear' element={<PointCreate/>}/>
    </Routes>    
    </BrowserRouter>
  )
}

export default App