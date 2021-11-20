import React, {createContext, useState} from 'react';

export const Store = createContext({
  access_token: '',
  update: () => {},
});

export const Provider = ({children}) => {
  const update = tk => {
    setToken({...token, access_token: tk});
  };
  const store = {
    access_token: 'santam12345',
    update: update,
  };
  const [token, setToken] = useState(store);

  return <Store.Provider value={token}>{children}</Store.Provider>;
};
