import React, { useContext } from 'react'
import { PointContext } from '../context/PointContext'
import PointForm from "../components/PointForm";
import PointForm2 from "../components/PointForm2";
import PointForm3 from "../components/PointForm3";
import PointForm4 from "../components/PointForm4";
import PointForm5 from "../components/PointForm5";

const PointStepper = () => {
const {state, dispatch} = useContext(PointContext);
return (
    <>
    {state.currentStep === 1 && <PointForm/>}
    {state.currentStep === 2 && <PointForm2/>}
    {state.currentStep === 3 && <PointForm3/>}
    {state.currentStep === 4 && <PointForm4/>}
    {state.currentStep === 5 && <PointForm5/>}
    </>        
  )
}

export default PointStepper
