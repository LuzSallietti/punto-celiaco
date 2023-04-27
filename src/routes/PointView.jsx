import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getById } from "../storage/firebaseMethods";
import BookmarkBtn from "../components/BookmarkBtn";
import GoBackBtn from "../components/GoBackBtn";
import LocationBtn from "../components/LocationBtn";
import Gallery from "../components/Gallery";
import AnchorBtn from "../components/AnchorBtn";
import RatingCount from "../components/RatingCount";
import ReviewsList from "../components/ReviewsList";
import ConsumeOptionsLabel from "../components/ConsumeOptionsLabel";

const PointView = () => {
  const { id } = useParams();
  const [point, setPoint] = useState(null);
  const [userRating, setUserRating] = useState(0);

  const fetchData = async () => {
    const data = await getById(id, "points");
    console.log(data);
    setPoint(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleRating = (value) => {
    setUserRating(value)
  };

  return (
    <section className="mx-auto w-full md:w-10/12 lg:w-7/12 px-4 pt-8 pb-32">      
        
      {point && (
        <article className="relative">
            <BookmarkBtn/>
            <GoBackBtn/>        
          <Gallery images={point.photos} />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            {point.name}
          </h1>
          <LocationBtn
            address={point.address}
            region={point.region}
            city={point.city}
          />
          <ConsumeOptionsLabel consumeOptions={point.consume_options}/>
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
          {/*CREATE REVIEW trigger*/}
          <div className="bg-amber-100 w-full p-4 rounded-xl my-2 ">
            <h2 className="text-lg font-medium text-center">¿Conoces este lugar?</h2>
            <p className="text-center mt-1">Comparte tu opinión para ayudar a otros</p>
            <div className="flex justify-center items-center pt-4">
                  {[...Array(5)].map((star, index) => {
                    const value = index + 1;
                    return (
                      <svg
                        key={value}
                        aria-hidden="true"
                        className={`w-8 h-8 ${
                          value <= userRating ? "text-yellow-400" : "text-gray-400"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleRating(value)}
                      >
                        <title>{`Star ${value}`}</title>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    );
                  })}

                  <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    {userRating} de 5
                  </p>
                </div>
          </div>
          

          <ReviewsList rating={point.rating} review={point.comments} />        
        </article> 
      )}
      
    </section>
  );
};

export default PointView;