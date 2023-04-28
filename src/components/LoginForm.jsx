import logo from "../assets/img/logo2.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { onSignIn, onSingInGmail } from "../storage/firebaseMethods";

const LoginForm = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    if (user.email) {
      try {
        const result = await onSignIn(user);
        console.log(result);
        //dispatch({ type: "LOGGIN", payload: { email: values.email, token: result?.user?.accessToken } });
        navigate("/home");
      } catch (error) {
        console.error("Luz Error:", error);
      }
    }
  }
  
  const handleLoginInGmail = async () => {    
    try {
        const result = await onSingInGmail();
        console.log(result);
        //dispatch({ type: "LOGGIN", payload: { email: result.user.email, token: result?.user?.accessToken } });
        navigate("/home");
        //setIsLoggin("Ingresar");
    } catch (error) {
        console.error(error);
        //setIsLoggin("Intentar nuevamente");
    }
}

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-6 w-auto" src={logo} alt="Punto celíaco" />
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          ¿No tienes cuenta?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Registrate
          </a>
        </p>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
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
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Recuperar contraseña
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Ingresar
              </button>
            </div>
          </form>
          <div className="flex items-center justify-center w-full my-4">
            <span className="w-4/12 h-2 border-b border-gray-400 mr-4" />
            <span className="text-sm">O</span>
            <span className="w-4/12 h-2 border-b border-gray-400 ml-4" />
          </div>
          <button
            onClick={handleLoginInGmail}
            className="flex w-full justify-center rounded-full bg-indigo-200 border px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <svg viewBox="0 0 1152 1152" focusable="false" aria-hidden="true" role="img" className="mr-3 h6- w-6 spectrum-Icon spectrum-Icon--sizeM" data-social-button-type="icon"><path d="M1055.994 594.42a559.973 559.973 0 0 0-8.86-99.684h-458.99V683.25h262.28c-11.298 60.918-45.633 112.532-97.248 147.089v122.279h157.501c92.152-84.842 145.317-209.78 145.317-358.198z" fill="#4285f4"></path><path d="M588.144 1070.688c131.583 0 241.9-43.64 322.533-118.07l-157.5-122.28c-43.64 29.241-99.463 46.52-165.033 46.52-126.931 0-234.368-85.728-272.691-200.919H152.636v126.267c80.19 159.273 245 268.482 435.508 268.482z" fill="#34a853"></path><path d="M315.453 675.94a288.113 288.113 0 0 1 0-185.191V364.482H152.636a487.96 487.96 0 0 0 0 437.724z" fill="#fbbc05"></path><path d="M588.144 289.83c71.551 0 135.792 24.589 186.298 72.88l139.78-139.779C829.821 144.291 719.504 96 588.143 96c-190.507 0-355.318 109.21-435.508 268.482L315.453 490.75c38.323-115.19 145.76-200.919 272.691-200.919z" fill="#ea4335"></path></svg>
            Ingresar con Google
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
