import { createContext, useContext } from "react";

export const PointContext = createContext({
    data : '',
    updateData : () => {},
});

export const usePoint = () => {
    return useContext(PointContext);
}

export const PointProvider = PointContext.Provider