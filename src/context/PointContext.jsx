import { useReducer, createContext } from 'react';

const initialState = {
  currentStep: 0,
  name: '',
  address:'',
  city:'',
  region:'',
  country:'',
  website:'',
  phone:'',
  photos: [],
  reviews: [],
  rating: 0,
  categories:[],
  consume_options:[]
};


// Definir la función reductora para gestionar el estado
const handleDispatch = (state, { type, payload }) => {
  switch (type) {
    case 'NEXT_STEP':
      return { ...state, currentStep: state.currentStep + 1 };
    case 'PREV_STEP':
      return { ...state, currentStep: state.currentStep - 1 };
    case 'SET_NAME':
      return { ...state, name: payload.name };
    case 'SET_ADDRESS':
      return { ...state, address: payload.address };
    case 'SET_PHOTOS':
      return { ...state, photos: payload.photos };
    case 'SET_REVIEW':
      return { ...state, reviews: payload.review };
    case 'SET_RATING':
      return { ...state, rating: payload.rating };
    default:
      return state;
  }
};

// Crear el contexto global
export const PointContext = createContext();

// Crear el componente del controlador de flujo
const PointContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(handleDispatch, initialState);
  const properties = { state, dispatch }

  // Devolver el contexto global con el estado y las funciones necesarias
  return (
    <PointContext.Provider value={{ 
      properties
    }}>
      {children}
    </PointContext.Provider>
  );
}

export default PointContextProvider;