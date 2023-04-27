import perfil from '../assets/img/perfil.jpg';
const ReviewsList = ({ rating, review }) => {
  return (
    <div className="mt-8 border-t border-indigo-200">
      <h2 className="text-xl font-medium mt-4 mb-8">Opiniones recientes</h2>
      <article className='border-b border-indigo-500/50'>
        <div className="flex items-center mb-4 space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src={perfil}
            alt=""
          ></img>
          <div className="space-y-1 dark:text-white">
            <p className="font-medium text-base">Luz Sallietti </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          {[...Array(5)].map((star, index) => {
            const value = index + 1;

            return (
              <svg
                key={value}
                aria-hidden="true"
                className={`w-5 h-5 ${
                  value <= rating ? "text-yellow-400" : "text-gray-400"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>{`Star ${value}`}</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            );
          })}
          <footer className="ml-3 text-sm text-gray-500 dark:text-gray-400">
          <p>
            <time dateTime="2017-03-03 19:00">3 de marzo de 2023</time>
          </p>
        </footer>
        </div>
        
        <p className="mb-2 text-gray-700 dark:text-gray-500">
          {review}
        </p>
        
        {/*READ MORE BUTTON ---> how it will works? */}
        <a
          href="#"
          className="block mb-5 text-sm font-medium text-indigo-600 hover:underline dark:text-indigo-500"
        >
          Leer más
        </a>
        
      </article>
    </div>
  );
};

export default ReviewsList;
