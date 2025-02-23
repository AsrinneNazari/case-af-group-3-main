import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import { SearchValues } from "../models/SearchValues";
import { useContext } from "react";
import { ResultContext } from "../context/ResultContext";
import { DigiNavigationPaginationCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";

interface ISearchPagingProps {
  handleSearch: (searchText: string, offset: number) => void;
  searchState: SearchValues;
}

export const SearchPaging = ({
  handleSearch,
  searchState,
}: ISearchPagingProps) => {
  const { resultState } = useContext(ResultContext);
  const totalPages = Math.ceil(resultState.total.value / searchState.pageSize);
  const currentPage = searchState.offset / searchState.pageSize + 1;

  const handlePageChange = (e: DigiNavigationPaginationCustomEvent<number>) => {
    const clickedPageOffset =
      e.detail * searchState.pageSize - searchState.pageSize;
    handleSearch(searchState.searchText, clickedPageOffset);
  };

  return (
    <>
      <DigiNavigationPagination
        afTotalPages={totalPages}
        afInitActive-page={currentPage}
        afCurrentResultStart={searchState.offset + 1}
        afCurrentResultEnd={searchState.offset + searchState.pageSize}
        afTotalResults={resultState.total.value}
        afResultName="företag"
        onAfOnPageChange={(e) => {
          handlePageChange(e);
        }}
        className={resultState.hits.length > 0 ? "" : "hideme"}
      ></DigiNavigationPagination>
    </>
  );
};
