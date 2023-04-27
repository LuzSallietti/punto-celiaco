import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { getData } from "../storage/firebaseMethods"
import BookmarkBtn from "./BookmarkBtn";
import AnchorBtn from "./AnchorBtn";
import Rating from "./Rating";
import LocationBtn from "./LocationBtn";

const shortText = (str) => {
  const arr= str.split("",140)
  return `${arr.join("")}...`;
}

const FeaturedPoints = () => {
    const [points, setPoints] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
      const data = await getData("points");
      setPoints(data)
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
  return (
    <div className="py-6">
        <h2 className="text-xl font-medium">Los más recomendados</h2>
        
        <div className="py-6 flex flex-col md:flex-row">
            {points && points.map(point => {
                return(
                    <article onClick={() => navigate(`/puntos/${point.id}`)}key={point.id} className="relative flex flex-col items-center bg-white border border-indigo-200 rounded-lg shadow md:w-6/12 mb-8 md: md:mr-8 hover:bg-indigo-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                      <BookmarkBtn/>
                    <img className="object-cover w-full rounded-t-lg h-36 md:rounded-l-lg" src={point.data.photos[0]} alt={point.data.name}></img>
                    <div className="flex flex-col justify-between p-4 w-full leading-normal">
                        <div className="flex flex-row justify-between items-start">
                          <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">{point.data.name}</h3>
                          <Rating rating={point.data.rating}/>
                        </div>
                        <LocationBtn address={point.data.address} city={point.data.city} region={point.data.region}/>
                        <div className="flex my-2 flex-row wrap">
                        {point.data.categories.map(category => {
                            return(
                                <AnchorBtn key={`${point.id}-${category}`}path={"/"} text={category}/>
                            )
                        })}
                        </div>
                                             
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">"{point.data.comments.length > 140 ? shortText(point.data.comments): point.data.comments}"</p>
                    </div>
                </article>

                )
            })

          
}

        </div>
      
    </div>
  )
}

export default FeaturedPoints
