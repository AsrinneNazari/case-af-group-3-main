import { createContext, Dispatch } from "react";
import { IResult } from "../models/IResult";
import { ISearchAction } from "../reducers/SearchReducer";

interface ISearchContext {
  resultState: IResult;
  searchDispatch: Dispatch<ISearchAction>;
}

export const ResultContext = createContext<ISearchContext>({
  resultState: {
    total: {
      value: 0,
    },
    hits: [],
  },
  searchDispatch: () => {
    return;
  },
});
