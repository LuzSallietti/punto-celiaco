import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../storage/firebaseMethods";
import Rating from "../components/Rating";
import LocationBtn from "../components/LocationBtn";
import Gallery from "../components/Gallery";

const PointView = () => {
  const { id } = useParams();
  const [point, setPoint] = useState(null);

  const fetchData = async () => {
    const data = await getById(id, "points");
    console.log(data);
    setPoint(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="mx-auto w-full md:w-10/12 lg:w-7/12 px-4 pt-8 pb-32">
      {point && (
        <>
        <Gallery images={point.photos}/>
          <h1>{point.name}</h1>
          <div className="flex justify-between items-center">
            <Rating rating={point.rating} />
            <span>5 evaluaciones</span>
          </div>
        </>
      )}
    </section>
  );
};

export default PointView;
