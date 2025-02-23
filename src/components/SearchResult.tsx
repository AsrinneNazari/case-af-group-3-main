import { useContext } from "react";
import { ResultContext } from "../context/ResultContext";
import { SearchResultCard } from "./SearchResultCard";
import { LayoutBlockVariation } from "@digi/arbetsformedlingen";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
} from "@digi/arbetsformedlingen-react";
import { SearchPaging } from "./SearchPaging";
import { SearchValues } from "../models/SearchValues";

interface ISearchResultProps {
  handleSearch: (searchText: string, offset: number) => void;
  searchState: SearchValues;
}

export const SearchResult = ({
  handleSearch,
  searchState,
}:ISearchResultProps) => {
  const { resultState } = useContext(ResultContext);

  const uniqueCompanyList = [
    ...new Map(
      resultState.hits.map((company) => [
        company.employer.organization_number,
        company,
      ])
    ).values(),
  ];

  return (
    <>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.SECONDARY}
        afVerticalPadding
      >
       <SearchPaging searchState={searchState} handleSearch={handleSearch} />
        <DigiLayoutContainer>
          {uniqueCompanyList.map((company) => (
            <SearchResultCard key={company.id} company={company} />
          ))}
        </DigiLayoutContainer>
        <SearchPaging searchState={searchState} handleSearch={handleSearch}/>
      </DigiLayoutBlock>
    </>
  );
};
