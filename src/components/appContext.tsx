import { createContext } from "react";

interface AppContextType {
  addLink(): void
}

export const AppContext = createContext<AppContextType>({} as AppContextType);
