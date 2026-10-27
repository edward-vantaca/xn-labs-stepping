import { createContext, useContext } from "react";

export const EditModalContext = createContext<() => void>(() => {});

export const useOpenEditModal = () => useContext(EditModalContext);
