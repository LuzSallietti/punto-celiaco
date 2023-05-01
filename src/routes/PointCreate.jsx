import PointContextProvider from "../context/PointContext";
import PointStepper from "../components/PointStepper";


const PointCreate = () => {
  
  return (
    <PointContextProvider>
      <main className="pt-8 pb-32">
        <PointStepper/>        
      </main>
    </PointContextProvider>
  );
};

export default PointCreate;
