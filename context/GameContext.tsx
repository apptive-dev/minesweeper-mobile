import React, { createContext, useState } from "react";

export const GameContext = createContext<any>(null);

export const GameProvider = ({ children }: any) => {
  const [premium, setPremium] = useState(false);

  return (
    <GameContext.Provider value={{ premium, setPremium }}>
      {children}
    </GameContext.Provider>
  );
};
