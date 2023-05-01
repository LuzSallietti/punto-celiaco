import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Bookmarked = () => {
  const { state, dispatch } = useContext(UserContext);
  console.log(state);
  return (
    state.isLogged && (
      <div>
        <h1>Esta la sección de los elementos guardados</h1>
      </div>
    )
  );
};

export default Bookmarked;
