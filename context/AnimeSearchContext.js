import { useState, createContext } from "react";

export const animeContext = createContext();

function animeSearchContext({ children }) {
  const [animeSearch, setAnimeSearch] = useState("contexto");

  return (
    <animeContext.Provider value={{ animeSearch, setAnimeSearch }}>
      {children}
    </animeContext.Provider>
  );
}

export default animeSearchContext;
