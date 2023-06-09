import { useState, useEffect, useContext } from "react";
import { getData, addData } from "../storage/firebaseMethods";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { PointContext } from "../context/PointContext";

const PointForm = () => {
  const { state, dispatch } = useContext(PointContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    //addData('points', values, photos)
    dispatch({type:'NEXT_STEP'})
  };

  return (
    <div className="mx-auto w-full md:w-9/12 lg:w-6/12 px-4">
      <form onSubmit={handleSubmit}>
        <div >
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">
              Sumá un Punto Celíaco
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              ¡Contribuí a la comunidad con toda la info que
              puedas!
            </p>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre del lugar
                </label>
                <div className="mt-1">
                  <div className="mb-2 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Celiamigos"
                      required
                      value={state.name}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_NAME",
                          payload: { name: e.target.value },
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full mb-2">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={state.address}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_ADDRESS",
                      payload: { address: e.target.value },
                    })
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1 mb-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ciudad
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={state.city}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_CITY",
                      payload: { city: e.target.value },
                    })
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-2 mb-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provincia
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={state.region}
                  onChange={(e) =>
                    dispatch({
                      type: "SET_REGION",
                      payload: { region: e.target.value },
                    })
                  }
                />
              </div>
              <div className="sm:col-span-4 mb-2">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sitio web
                </label>
                <div className="mt-1">
                  <input
                    id="website"
                    name="website"
                    type="website"
                    autoComplete="website"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={state.website}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_WEBSITE",
                        payload: { website: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
              <div className="sm:col-span-2 mb-2">
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Teléfono
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phonee"
                    id="phone"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={state.phone}
                    onChange={(e) =>
                      dispatch({
                        type: "SET_PHONE",
                        payload: { phone: e.target.value },
                      })
                    }
                  />
                </div>
              </div>
            </div>
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
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default PointForm;
