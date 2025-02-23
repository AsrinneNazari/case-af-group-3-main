import {
  DigiHeader,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
} from "@digi/arbetsformedlingen-react";
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <header>
      <DigiHeader
        afSystemName="🔍 LIA4U"
        afHideSystemName={false}
        afMenuButtonText="Meny">
        <a
          slot="header-logo"
          aria-label="Designsystemets startsida"
          href="/"></a>
        <div slot="header-navigation">
          <DigiHeaderNavigation
            afCloseButtonText="Stäng"
            afCloseButtonAriaLabel="Stäng meny"
            afNavAriaLabel="Huvudmeny">
            <DigiHeaderNavigationItem
              afCurrentPage={location.pathname === "/" ? true : false}>
              <NavLink to={"/"}>Hem</NavLink>
            </DigiHeaderNavigationItem>
            <DigiHeaderNavigationItem
              afCurrentPage={
                location.pathname === "/savedCompanies" ? true : false
              }>
              <NavLink to={"/savedCompanies"}>Sparade företag</NavLink>
            </DigiHeaderNavigationItem>
          </DigiHeaderNavigation>
        </div>
      </DigiHeader>
    </header>
  );
};
