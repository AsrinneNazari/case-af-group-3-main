import {
  ButtonSize,
  ButtonVariation,
  LinkVariation,
  TableSize,
  TableVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiIconTrash,
  DigiLinkExternal,
  DigiTable,
} from "@digi/arbetsformedlingen-react";
import { useContext } from "react";
import { SavedCompanyContext } from "../context/SavedCompanyContext";
import { SavedCompany } from "../models/SavedCompany";
import { SavedCompanyActionType } from "../reducers/SavedCompanyReducer";
import { cleanOrgNumber } from "../services/orgService";

export const SavedCompanyTable = () => {
  const { savedCompanyState, savedCompanyDispatch } =
    useContext(SavedCompanyContext);

  const handleRemove = (company: SavedCompany) => {
    const action = {
      type: SavedCompanyActionType.REMOVED,
      payload: JSON.stringify(company),
    };
    savedCompanyDispatch(action);
  };

  const handleRemoveAll = () => {
    const action = {
      type: SavedCompanyActionType.REMOVEDALL,
      payload: JSON.stringify(""),
    };
    savedCompanyDispatch(action);
  };

  return (
    <DigiTable afSize={TableSize.SMALL} afVariation={TableVariation.PRIMARY}>
      <table>
        <thead>
          <tr>
            <th scope="col">Företagsnamn</th>
            <th scope="col">Organisationsnummer</th>
            <th scope="col">Google</th>
            <th scope="col">Ta bort</th>
          </tr>
        </thead>
        <tbody>
          {savedCompanyState.map((company) => {
            return (
              <tr key={company.id}>
                <th scope="row">{company.name}</th>
                <td>{cleanOrgNumber(company.id)}</td>
                <td>
                  <DigiLinkExternal
                    afHref={"https://www.google.com/search?q=" + company.name}
                    afTarget="_blank"
                    afVariation={LinkVariation.SMALL}>
                    Google
                  </DigiLinkExternal>
                </td>
                <td>
                  <DigiButton
                    afSize={ButtonSize.MEDIUM}
                    afVariation={ButtonVariation.FUNCTION}
                    afFullWidth={false}
                    onAfOnClick={() => {
                      handleRemove(company);
                    }}>
                    <DigiIconTrash slot="icon" />
                    Ta bort
                  </DigiButton>
                </td>
              </tr>
            );
          })}
          <tr className={savedCompanyState.length > 0 ? "" : "hideme" }>
            <td></td><td></td><td></td>
            <td>
                  <DigiButton
                    afSize={ButtonSize.MEDIUM}
                    afVariation={ButtonVariation.FUNCTION}
                    afFullWidth={false}
                    onAfOnClick={handleRemoveAll}>
                    <DigiIconTrash slot="icon" />
                    Rensa lista
                  </DigiButton>
            </td>
          </tr>
        </tbody>
      </table>
    </DigiTable>
  );
};
