import { useState, useEffect } from "react";
import { getData } from "../storage/firebaseMethods";
import { PhotoIcon } from "@heroicons/react/24/solid";

const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const PointForm = () => {
  const [values, setValues] = useState({
    name: "",
    address: "",
    city: "",
    region: "",
    website: "",
    phone: "",
    categories: [],
    consume_options: [],
    comments: [],
    rating: 0,
    photos: [],
  });

  const fetchData = async () => {
    const categoryData = await getData("categories");
    const consumeData = await getData("consume_options");
    setCategoryOptions(categoryData);
    setConsumeOptions(consumeData);
  };

  const [categoryOptions, setCategoryOptions] = useState(null);
  const [consumeOptions, setConsumeOptions] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = (e, property) => {
    const checked = e.target.checked;
    const name = e.target.name;
    const prop_values = values[property];
    const included = prop_values.includes(name);

    checked
      ? !included &&
        setValues({
          ...values,
          [property]: [...prop_values, name],
        })
      : included &&
        setValues({
          ...values,
          [property]: prop_values.filter((el) => el !== name),
        });
    console.log(values);
  };

  const handleRating = (value) => {
    setValues({...values, rating: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="mx-auto w-full md:w-9/12 lg:w-6/12 px-4">
      <form onSubmit={handleSubmit}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Sumá un Punto Celíaco
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              ¡Contribuí a la comunidad sumando la info lo más completa que
              puedas!
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nombre
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Celiamigos"
                      required
                      value={values.name}
                      onChange={(e) => {
                        setValues({ ...values, name: e.target.value });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={values.address}
                  onChange={(e) =>
                    setValues({ ...values, address: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Ciudad
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={values.city}
                  onChange={(e) =>
                    setValues({ ...values, city: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Provincia
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                  value={values.region}
                  onChange={(e) =>
                    setValues({ ...values, region: e.target.value })
                  }
                />
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="website"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Sitio web
                </label>
                <div className="mt-2">
                  <input
                    id="website"
                    name="website"
                    type="website"
                    autoComplete="website"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.website}
                    onChange={(e) =>
                      setValues({ ...values, website: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="telephone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Teléfono
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phonee"
                    id="phone"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={values.phone}
                    onChange={(e) =>
                      setValues({ ...values, phone: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

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
                          <div
                            className="relative flex gap-x-3"
                            key={category.id}
                          >
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

                <div className="border-gray-900/10 pb-12">
                  <h2 className="text-base font-semibold leading-7 text-gray-900">
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
                            <div
                              className="relative flex gap-x-3"
                              key={option.id}
                            >
                              <div className="flex h-6 items-center">
                                <input
                                  id={option.data.name}
                                  name={option.data.name}
                                  type="checkbox"
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
              </div>
            </div>
            {/*COMMENTS AND PHOTO*/}
            <div className=" border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Experiencia
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
                    value={values.comments}
                    onChange={(e) =>
                      setValues({ ...values, comments: e.target.value })
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
                          value <= values.rating ? "text-yellow-400" : "text-gray-400"
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
                    {values.rating} de 5
                  </p>
                </div>
              </div>

              {/*upload photos*/}
              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Compartí una foto
                </label>
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
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default PointForm;
