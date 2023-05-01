import PointContextProvider from '../context/PointContext'
import PointForm from '../components/PointForm'

const PointCreate = () => {
  return (
    <PointContextProvider>
    <div className='pt-8 pb-32'>        
        <PointForm/>            
    </div>
    </PointContextProvider>
  )
}

export default PointCreate
