import {
  DigiLayoutContainer,
  DigiTypography,
  DigiTypographyHeadingJumbo,
} from "@digi/arbetsformedlingen-react";
import { TypographyHeadingJumboLevel } from "@digi/arbetsformedlingen";
import { SavedCompanyTable } from "../components/SavedCompanyTable";
import { SavedCompanyExport } from "../components/SavedCompanyExport";

export const SavedCompanies = () => {
  return (
    <>
      <DigiLayoutContainer afVerticalPadding>
        <DigiTypography>
          <DigiTypographyHeadingJumbo
            afText="Sparade företag"
            afLevel={
              TypographyHeadingJumboLevel.H1
            }></DigiTypographyHeadingJumbo>
          <p>
            Här hittar du dina sparade företag.
          </p>
        </DigiTypography>
      </DigiLayoutContainer>
      <DigiLayoutContainer afMarginBottom={true}>
        <SavedCompanyExport />
        <SavedCompanyTable />
      </DigiLayoutContainer>

    </>
  );
};
