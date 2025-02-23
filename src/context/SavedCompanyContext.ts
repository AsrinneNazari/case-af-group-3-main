import { Dispatch, createContext } from "react";
import { SavedCompany } from "../models/SavedCompany";
import { ISavedCompanyAction } from "../reducers/SavedCompanyReducer";

interface ISavedCompanyContext {
    savedCompanyState: SavedCompany[];
    savedCompanyDispatch: Dispatch<ISavedCompanyAction>;
  }
  
  export const SavedCompanyContext = createContext<ISavedCompanyContext>({
    savedCompanyState: [],
    savedCompanyDispatch: () => {
      return;
    },
  });