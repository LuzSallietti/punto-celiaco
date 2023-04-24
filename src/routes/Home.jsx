import { useState, useEffect } from "react";
import { getData } from "../storage/firebaseMethods";
import SearchForm from '../components/SearchForm';
import CategoriesFilter from "../components/CategoriesFilter";

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
    <section className="mx-auto w-full md:w-9/12 lg:w-6/12 px-4 pt-8 pb-32">
      <h1 className="text-2xl font-medium text-center">Encontrá los mejores lugares para comer sin gluten.</h1>
      <SearchForm/>
      <CategoriesFilter/>
      
      {points && points.map(point => {
        return(
            <div key={point.id}>
                <h2>{point.data.name}</h2>
                <p>{point.data.address}</p>

            </div>
        )
      })}
      
    </section>
  );
};

export default Home;
