import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { SearchField } from "./SearchField";
import { SearchResult } from "./SearchResult";
import { useContext, useState } from "react";
import { SearchValues } from "../models/SearchValues";
import { getSearch } from "../services/searchService";
import { SearchActionType } from "../reducers/SearchReducer";
import { ResultContext } from "../context/ResultContext";

export const SearchApp = () => {
  const { searchDispatch } = useContext(ResultContext);
  const [searchState, setSearchState] = useState<SearchValues>({
    searchText: "",
    offset: 0,
    pageSize: 20,
  });

  const handleSearch = async (searchText: string, offset: number) => {
    const data = await getSearch(searchText, offset, searchState.pageSize);

    const action = {
      type: SearchActionType.SEARCHED,
      payload: JSON.stringify(data),
    };
    searchDispatch(action);
    setSearchState({
      searchText: searchText,
      offset: offset,
      pageSize: searchState.pageSize,
    });
  };

  return (
    <>
      <DigiLayoutContainer afMarginBottom={true}>
        <SearchField handleSearch={handleSearch} />
      </DigiLayoutContainer>
      <SearchResult searchState={searchState} handleSearch={handleSearch} />
    </>
  );
};
