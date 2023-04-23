import { useState, useEffect } from "react";
import { getData } from "../storage/firebaseMethods";
import AnchorBtn from "../components/AnchorBtn";

const Home = () => {
  const [points, setPoints] = useState(null);

  const fetchData = async () => {
    const data = await getData("points");
    setPoints(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" flex flex-col items-center justify-center">
      <h1>Punto celíaco</h1>
      <h2>Home</h2>
      <br></br>
      {points && points.map(point => {
        return(
            <div key={point.id}>
                <h2>{point.data.name}</h2>
                <p>{point.data.address}</p>

            </div>
        )
      })}
      
    </div>
  );
};

export default Home;
