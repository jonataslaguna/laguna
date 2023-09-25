import { useState } from "react";
import PortfolioContext from "./PortfolioContext";

type PortfolioProvider = {
    children: React.ReactNode;
  };
  

function PortfolioProvider  ({ children }: PortfolioProvider )  {
  const [activeLink, setActiveLink] = useState<string>('/');

  const handleClickRoutes = (route: string) => {
    setActiveLink(route);
  }
    
    return (
        <PortfolioContext.Provider value={{ handleClickRoutes, activeLink }}>
        {children}
        </PortfolioContext.Provider>
    );
};

export default PortfolioProvider;