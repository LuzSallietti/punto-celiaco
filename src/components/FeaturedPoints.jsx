import { useState, useEffect } from "react"
import { getData } from "../storage/firebaseMethods"
import AnchorBtn from "./AnchorBtn";
import Rating from "./Rating";
import LocationBtn from "./LocationBtn";

const FeaturedPoints = () => {
    const [points, setPoints] = useState(null);

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
        
        <div className="py-6 flex">
            {points && points.map(point => {
                return(
                    <article key={point.id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-indigo-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
                    <img className="object-cover w-full rounded-t-lg h-36 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={point.data.photos[0]} alt={point.data.name}></img>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h3 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">{point.data.name}</h3>
                        <LocationBtn city={point.data.city} region={point.data.region}/>
                        {point.data.categories.map(category => {
                            return(
                                <AnchorBtn key={`${point.id}-${category}`}path={"/"} text={category}/>
                            )
                        })}   
                        <Rating rating={point.data.rating}/>
                                             
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 mt-4">"{point.data.comments}"</p>
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
