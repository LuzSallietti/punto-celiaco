import { useState, useEffect, useContext } from "react";
import { getData, addData } from "../storage/firebaseMethods";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { PointContext } from "../context/PointContext";

const PointForm4 = () => {
  const { state, dispatch } = useContext(PointContext);

  const handleRating = (value) => {
    dispatch({type: 'SET_RATING', payload:{rating: value}})
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
            Tu experiencia
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            ¿Qué fue lo que más y lo que menos te gustó?
          </p>
          <div className="col-span-full mt-4">
            <label
              htmlFor="about"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Escribí tu comentario
            </label>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                rows={3}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={state.review}
                onChange={(e) =>
                  dispatch({type:'SET_REVIEW', payload:{review: e.target.value}})
                }
              />
            </div>
          </div>

          {/*Rating*/}
          <div className=" border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Puntuación
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              ¿Cuántas estrellas le das?
            </p>
            <div className="flex items-center pt-4">
              {[...Array(5)].map((star, index) => {
                const value = index + 1;

                return (
                  <svg
                    key={value}
                    aria-hidden="true"
                    className={`w-5 h-5 ${
                      value <= state.rating
                        ? "text-yellow-400"
                        : "text-gray-400"
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
                {state.rating} de 5
              </p>
            </div>
          </div>
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

export default PointForm4;