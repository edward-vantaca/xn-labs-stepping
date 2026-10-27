import { createContext, useContext } from "react";

export type Page = "dashboard" | "actionItems";

export const NavigationContext = createContext<{ page: Page; navigate: (page: Page) => void }>({
  page: "dashboard",
  navigate: () => {},
});

export const useNavigation = () => useContext(NavigationContext);
