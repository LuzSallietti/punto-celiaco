import { useState, useEffect, useContext } from "react";
import { getData, addData } from "../storage/firebaseMethods";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { PointContext } from "../context/PointContext";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PointForm3 = () => {
  const [consumeOptions, setConsumeOptions] = useState(null);
  const { state, dispatch } = useContext(PointContext);
  console.log(state);

  const fetchData = async () => {
    const consumeData = await getData("consume_options");
    setConsumeOptions(consumeData);
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
      ? !included &&
        dispatch({
          type: action,
          payload: { [property]: [...state[property], name] },
        })
      : included &&
        dispatch({
          type: action,
          payload: { [property]: prop_values.filter((el) => el !== name) },
        });
    console.log(state.consume_options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    //addData("points", values, photos);
    dispatch({type:'NEXT_STEP'})
  };
  const handlePrevStep = ()=>{
    dispatch({type:'PREV_STEP'})
  }

  return (
    <div className="mx-auto w-full md:w-9/12 lg:w-6/12 px-4">
      <form onSubmit={handleSubmit}>
        <div className="border-gray-900/10 pb-6 pt-6">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">
            Consumo
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Contanos qué opciones para consumir ofrece este lugar.
          </p>
          <fieldset>
            <div className="mt-6 space-y-6">
              {consumeOptions &&
                consumeOptions.map((option) => {
                  return (
                    <div className="relative flex gap-x-3" key={option.id}>
                      <div className="flex h-6 items-center">
                        <input
                          id={option.data.name}
                          name={option.data.name}
                          type="checkbox"
                          checked={state.consume_options.includes(option.data.name)}
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={(e) => {
                            handleCheckboxChange(e, "consume_options");
                          }}
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor={option.data.name}
                          className="font-medium text-gray-900"
                        >
                          {capitalizeFirstLetter(option.data.name)}
                        </label>
                      </div>
                    </div>
                  );
                })}
            </div>
          </fieldset>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
            onClick={handlePrevStep}
          >
            Anterior
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
           Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default PointForm3;
