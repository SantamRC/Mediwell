import React, {createContext, useReducer} from 'react';
import Store from './Store';
import Reducer from './Reducer';

const appContext = createContext(Store);

const Provider = ({children}) => {
  const [state, dispatch] = useReducer(Reducer, Store);

  const useDispatch = (type, value) => {
    dispatch({
      type: type,
      token: value,
    });
  };

  return (
    <appContext.Provider value={{state, useDispatch}}>
      {children}
    </appContext.Provider>
  );
};

export {appContext, Provider};
