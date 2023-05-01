import { useState, useEffect, useContext } from "react";
import { getData, addData } from "../storage/firebaseMethods";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { PointContext } from "../context/PointContext";

const PointForm5 = () => {
  const { state, dispatch } = useContext(PointContext);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      dispatch({ type: "SET_PHOTOS", payload: { photos: [...state.photos, e.target.files[0]] } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    //addData("points", values, photos);
  };
  const handlePrevStep = ()=>{
    dispatch({type:'PREV_STEP'})
  }

  return (
    <div className="mx-auto w-full md:w-9/12 lg:w-6/12 px-4">
      <form onSubmit={handleSubmit}>
        <div className="border-gray-900/10 pb-6 pt-6">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">
            Compartí una foto
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Acá podés subir una o varias imágenes a tu comentario.
          </p>
          <div className="col-span-full mt-8">            
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Subí una imagen</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleImageChange}
                    />
                  </label>
                  <p className="pl-1">o arrastrá y soltá</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF hasta 10MB
                </p>
              </div>
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
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default PointForm5;
