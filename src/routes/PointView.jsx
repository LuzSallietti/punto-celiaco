import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../storage/firebaseMethods";
import Rating from "../components/Rating";
import LocationBtn from "../components/LocationBtn";
import Gallery from "../components/Gallery";
import AnchorBtn from "../components/AnchorBtn";
import RatingCount from "../components/RatingCount";
import ReviewsList from "../components/ReviewsList";

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
          <Gallery images={point.photos} />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {point.name}
          </h1>
          <LocationBtn
            address={point.address}
            region={point.region}
            city={point.city}
          />
          <RatingCount rating={point.rating} />
          <div className="flex my-2 flex-row wrap">
            {point.categories.map((category) => {
              return (
                <AnchorBtn
                  key={`${point.id}-${category}`}
                  path={"/"}
                  text={category}
                />
              );
            })}
          </div>

          <ReviewsList rating={point.rating} review={point.comments} />
        </>
      )}
    </section>
  );
};

export default PointView;
