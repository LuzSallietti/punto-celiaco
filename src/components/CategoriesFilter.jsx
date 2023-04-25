import { useEffect, useState } from "react"
import { getData } from "../storage/firebaseMethods"
import AnchorBtn from "./AnchorBtn";

const CategoriesFilter = () => {
  const [categories, setCategories] = useState(null);
  const getCategories = async (collectionName) => {
    setCategories(await getData(collectionName))
  }
  useEffect(() => {
    getCategories('categories')   
  }, []);
    
  return (
     <div className="w-full lg:w-auto">
      <div className="overflow-x-scroll scroll-smooth lg:overflow-auto py-4">
        <div className="flex lg:flex-wrap items-center whitespace-nowrap">
          {categories &&
            categories.map((category) => {
              return (
                <AnchorBtn
                  key={category.id}
                  path={"/categoria"}
                  text={category.data.name}
                />
              );
            })}
        </div>
      </div>
    </div>
  )
}

export default CategoriesFilter
