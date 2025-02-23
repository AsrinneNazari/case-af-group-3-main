import { TypographyHeadingJumboLevel } from "@digi/arbetsformedlingen";
import {
  DigiLayoutContainer,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from "@digi/arbetsformedlingen-react";
import { SearchApp } from "../components/SearchApp";

export const Home = () => {
  return (
    <>
      <DigiTypography>
        <DigiLayoutContainer afVerticalPadding>
          <DigiTypographyHeadingJumbo
            afText="Hitta företag"
            afLevel={
              TypographyHeadingJumboLevel.H1
            }></DigiTypographyHeadingJumbo>
          <p>
            Det här är en tjänst som hjälper dig att hitta företag inom ett visst yrkesområde.
            Sök bara på ett yrke och du kommer få en lista på alla företag som just nu har annonser ute för yrket. 
            </p><p>Du kan spara företag i en favoritlista för att få lättare överblick. Den kan du sen använda som underlag för att söka praktikplatser.</p>
            
        </DigiLayoutContainer>
      <SearchApp/>
      </DigiTypography>
    </>
  );
};
