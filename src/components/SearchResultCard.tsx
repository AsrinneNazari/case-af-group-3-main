import {
  ButtonSize,
  ButtonVariation,
  InfoCardMultiHeadingLevel,
  InfoCardMultiType,
  LinkVariation,
  TypographyMetaVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiIconHeart,
  DigiIconHeartSolid,
  DigiInfoCardMulti,
  DigiLinkExternal,
  DigiTypographyMeta,
} from "@digi/arbetsformedlingen-react";
import { IHit } from "../models/IHit";
import { useContext } from "react";
import { SavedCompanyContext } from "../context/SavedCompanyContext";
import { SavedCompany } from "../models/SavedCompany";
import { SavedCompanyActionType } from "../reducers/SavedCompanyReducer";
import { cleanOrgNumber } from "../services/orgService";

interface ISearchResultCardProps {
  company: IHit;
}

export const SearchResultCard = ({ company }: ISearchResultCardProps) => {
  const { savedCompanyState, savedCompanyDispatch } =
    useContext(SavedCompanyContext);

  const handleAddCompany = (id: string, name: string) => {
    const company = new SavedCompany(id, name);
    const action = {
      type: SavedCompanyActionType.ADDED,
      payload: JSON.stringify(company),
    };
    savedCompanyDispatch(action);
  };

  const handleRemoveCompany = (id: string, name: string) => {
    const company = new SavedCompany(id, name);
    const action = {
      type: SavedCompanyActionType.REMOVED,
      payload: JSON.stringify(company),
    };
    savedCompanyDispatch(action);
  };
  return (
    <>
      <DigiInfoCardMulti
        afHeading={company.employer.name}
        afHeadingLevel={InfoCardMultiHeadingLevel.H2}
        afType={InfoCardMultiType.ENTRY}>
        <DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
          <p>Ort: {company.workplace_address.municipality}</p>
          <p slot="secondary">
            Organisationsnummer: {cleanOrgNumber(company.employer.organization_number)}
          </p>
        </DigiTypographyMeta>
<div className="digi-info-card-multi__flex">
        <DigiLinkExternal
          afHref={"https://www.google.com/search?q=" + company.employer.name}
          afTarget="_blank"
          afVariation={LinkVariation.SMALL}>
          Google
        </DigiLinkExternal>

        {savedCompanyState.find(
          (savedCompany) =>
            savedCompany.id === company.employer.organization_number
        ) ? (
          <>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.FUNCTION}
              afFullWidth={false}
              onAfOnClick={() => {
                handleRemoveCompany(
                  company.employer.organization_number,
                  company.employer.name
                );
              }}>
              <DigiIconHeartSolid slot="icon" />
              Ta bort från sparade företag
            </DigiButton>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.FUNCTION}
              afFullWidth={false}
              className="hideme"
              onAfOnClick={() => {
                handleAddCompany(
                  company.employer.organization_number,
                  company.employer.name
                );
              }}>
              <DigiIconHeart slot="icon" />
              Lägg till i sparade företag
            </DigiButton>
          </>
        ) : (
          <>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.FUNCTION}
              afFullWidth={false}
              className="hideme"
              onAfOnClick={() => {
                handleRemoveCompany(
                  company.employer.organization_number,
                  company.employer.name
                );
              }}>
              <DigiIconHeartSolid slot="icon" />
              Ta bort från sparade företag
            </DigiButton>
            <DigiButton
              afSize={ButtonSize.MEDIUM}
              afVariation={ButtonVariation.FUNCTION}
              afFullWidth={false}
              onAfOnClick={() => {
                handleAddCompany(
                  company.employer.organization_number,
                  company.employer.name
                );
              }}>
              <DigiIconHeart slot="icon" />
              Lägg till i sparade företag
            </DigiButton>
          </>
        )}
        </div>
      </DigiInfoCardMulti>
    </>
  );
};
