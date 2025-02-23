import { LOCAL_STORAGE_NAME } from "../App";
import { SavedCompany } from "../models/SavedCompany";

export interface ISavedCompanyAction {
  type: SavedCompanyActionType;
  payload: string;
}

export enum SavedCompanyActionType {
  ADDED,
  REMOVED,
  REMOVEDALL
}

export const SavedCompanyReducer = (
  state: SavedCompany[],
  action: ISavedCompanyAction
): SavedCompany[] => {
  const parsedPayload: SavedCompany = JSON.parse(action.payload);
  switch (action.type) {
    case SavedCompanyActionType.ADDED: {
      const updatedState = [...state, parsedPayload];
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(updatedState));
      return updatedState;
    }
    case SavedCompanyActionType.REMOVED: {
      const updatedState = state.filter(
        (company) => company.id !== parsedPayload.id
      );
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(updatedState));
      return updatedState;
    }
    case SavedCompanyActionType.REMOVEDALL: {
      const updatedState:SavedCompany[] = [];
      localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(updatedState));
      return updatedState;
    }

    default:
      return state;
  }
};
