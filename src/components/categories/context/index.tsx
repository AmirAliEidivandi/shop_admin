import React, { createContext, useContext, useReducer } from "react";
import { Action, CategoriesState, initState, reducer } from "../state";

interface CategoriesContextProps {
    state: CategoriesState;
    dispatch: React.Dispatch<Action>;
}

export const Context = createContext<CategoriesContextProps>({} as CategoriesContextProps);

export const CategoriesProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const [state, dispatch] = useReducer(reducer, initState);
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const useCategoriesState = () => {
    return useContext(Context);
};
