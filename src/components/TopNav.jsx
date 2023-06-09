import { Fragment, useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { onSignOut } from '../storage/firebaseMethods';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/img/logo2.png';
import profilePic from '../assets/img/profile.png';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TopNav = () => {
  const {state, dispatch} = useContext(UserContext);
  const handleLogout = async () => {
    try {
      await onSignOut();
      dispatch({ type: "LOGOUT" })
    } catch (error) {
      console.log(error);
    }    
  }
  return (
    <Disclosure as="nav" className="bg-white rounded-full lg:w-9/12 lg:mx-auto mt-2 mx-2">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-16 ">
            <div className="relative flex h-16 items-center justify-between">              
              <div className="flex flex-1 items-center justify-start sm:items-stretch">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-4 w-auto lg:hidden"
                    src={logo}
                    alt="Punto celíaco"
                  />
                  <img
                    className="hidden h-6 w-auto lg:block"
                    src={logo}
                    alt="Punto celíaco"
                  />
                </div>               
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-indigo-200 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={profilePic}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Mi perfil
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Preferencias
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')} onClick={handleLogout} to="#">
                            
                            Cerrar sesión
                          </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          
        </>
      )}
    </Disclosure>
  );
};

export default TopNav;
