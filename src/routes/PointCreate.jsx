import PointContextProvider from '../context/PointContext'
//import PointForm from '../components/PointForm'
import PointForm2 from '../components/PointForm2'

const PointCreate = () => {
  return (
    <PointContextProvider>
    <div className='pt-8 pb-32'>        
        <PointForm2/>            
    </div>
    </PointContextProvider>
  )
}

export default PointCreate
