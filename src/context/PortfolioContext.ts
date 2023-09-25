import { createContext } from "react";

type PortfolioContextType = {
    handleClickRoutes: (route: string) => void;
    activeLink: string;
};

const PortfolioContext = createContext({} as PortfolioContextType);

export default PortfolioContext;