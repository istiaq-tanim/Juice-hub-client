import  { createContext, useState } from "react";

export const SwipeContext = createContext(null);

const SwipeProvider = ({ children }) => {
  const [place, setPlace] = useState(null);

  const contextValue = {
    place,
    setPlace,
  };

  return (
    <SwipeContext.Provider value={contextValue}>
      {children}
    </SwipeContext.Provider>
  );
};

export default SwipeProvider;