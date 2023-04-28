import {useState, useContext} from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { createNewUser } from "../storage/firebaseMethods";
import logo from "../assets/img/logo2.png";

const RegisterForm = () => {
    const [values, setValues] =useState({ email:"", password:"", repeatPassword:""})
    const {state, dispatch} = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (values.email && (values.password === values.repeatPassword)){
            try {
                const result = await createNewUser(values.email, values.password);
                console.log(result);
                dispatch({
                    type: "LOGGIN",
                    payload: { email: values.email, token: result?.user?.accessToken },
                  });
                  navigate("/home");
            } catch (error) {
                console.error(error)                
            }
        }
    }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-6 w-auto" src={logo} alt="Punto celíaco" />
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Iniciar sesión
          </Link>
        </p>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <h1 className="text-base font-medium my-6">
                Regístrate con tu correo electrónico
              </h1>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Dirección de correo electrónico
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.password}
                  onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                  }
                />
              </div>

              <div className="flex items-center justify-between mt-6">
                <label
                  htmlFor="repeat_password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Repetir contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="repeat_password"
                  name="repeat_password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={values.repeatPassword}
                  onChange={(e) =>
                  setValues({ ...values, repeatPassword: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="">
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Crear cuenta
              </button>
              <button
                type="reset"
                className="mt-2 flex w-full justify-center rounded-full bg-indigo-200 border px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
