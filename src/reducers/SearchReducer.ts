import { IResult } from "../models/IResult";

export interface ISearchAction {
  type: SearchActionType;
  payload: string;
}

export enum SearchActionType {
  SEARCHED,
}

export const SearchReducer = (
  state: IResult, searchAction: ISearchAction): IResult => {
  switch (searchAction.type) {
    case SearchActionType.SEARCHED: {
      return JSON.parse(searchAction.payload);
    }

    default:
      return state;
  }
};
