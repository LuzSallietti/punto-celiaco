import { useNavigate } from "react-router-dom"

const GoBackBtn = () => {
    const navigate = useNavigate()
  return (
    <div className="group h-12 w-12 opacity-80 rounded-full bg-indigo-200 absolute left-0 ml-2 mt-2 flex justify-center items-center  hover:bg-gray-50 dark:hover:bg-gray-800" onClick={() => navigate(-1)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6  text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-500">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  )
}

export default GoBackBtn
