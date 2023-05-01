import { useState, useEffect, useContext } from "react";
import { getData, addData } from "../storage/firebaseMethods";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { PointContext } from "../context/PointContext";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PointForm2 = () => {
  const [categoryOptions, setCategoryOptions] = useState(null);
  const { state, dispatch } = useContext(PointContext);
  console.log(state);

  const fetchData = async () => {
    const categoryData = await getData("categories");
    setCategoryOptions(categoryData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = (e, property) => {
    const action = `SET_${property.toUpperCase()}`;
    const checked = e.target.checked;
    console.log(checked, e.target.name);
    const name = e.target.name;
    const prop_values = state[property]; //chequear
    const included = prop_values.includes(name);
    console.log(prop_values, included);

    checked
      ? !included && dispatch({ type: action, payload: { [property]: [...state[property],name] } })
      : included &&
        dispatch({
          type: action,
          payload: { [property]: prop_values.filter((el) => el !== name) },
        });
    console.log(state.categories);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    //addData("points", values, photos);
  };

  return (
    <div className="mx-auto w-full md:w-9/12 lg:w-6/12 px-4">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12"></div>
        <div className="border-gray-900/10 pb-12 pt-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            ¿Qué es este lugar?
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Elegí una o varias categorías para describirlo.
          </p>
          <div className="mt-5 space-y-10">
            <fieldset>
              <div className="mt-6 space-y-6">
                {categoryOptions &&
                  categoryOptions.map((category) => {
                    return (
                      <div className="relative flex gap-x-3" key={category.id}>
                        <div className="flex h-6 items-center">
                          <input
                            id={category.data.name}
                            name={category.data.name}
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            onChange={(e) => {
                              handleCheckboxChange(e, "categories");
                            }}
                          />
                        </div>
                        <div className="text-sm leading-6">
                          <label
                            htmlFor={category.data.name}
                            className="font-medium text-gray-900"
                          >
                            {capitalizeFirstLetter(category.data.name)}
                          </label>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </fieldset>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PointForm2;
