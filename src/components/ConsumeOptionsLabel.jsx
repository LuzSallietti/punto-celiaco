import { capitalizeFirstLetter } from "../helpers/functions";

const ConsumeOptionsLabel = ({ consumeOptions }) => {
  return (
    <div className="flex items-center flex-wrap">
      {consumeOptions.map((option, index) => {
        return (
          <span key={option} className="text-sm text-gray-700 font-medium mr-2 my-2">
            {index > 0? `- ${capitalizeFirstLetter(option)}`:capitalizeFirstLetter(option)}
          </span>
        )
      })}
    </div>
  );
};

export default ConsumeOptionsLabel;
