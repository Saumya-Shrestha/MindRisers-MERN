import { createContext } from 'react';

const UserContext = createContext();

const UserProvider = (props) => {
  const user = {
    id: 1,
    name: 'Ram',
    gender: 'Male',
    age: 25,
  };

  return (
    <>
      <UserContext.Provider value={{ user }}>{props.children}</UserContext.Provider>
    </>
  );
};

export { UserContext, UserProvider };
