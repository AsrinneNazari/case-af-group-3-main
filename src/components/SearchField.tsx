import {
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { DigiFormInputSearchCustomEvent } from "@digi/arbetsformedlingen/dist/types/components";

interface ISearchFieldProps {
  handleSearch: (searchText:string, offset:number) =>void
}

export const SearchField = ({ handleSearch }: ISearchFieldProps) => {


  const handleSubmit = async (e: DigiFormInputSearchCustomEvent<string>) => {
    e.preventDefault();
    handleSearch(e.detail, 0);

  };
  return (
    <>
      <DigiFormInputSearch
        afLabel="Sök på ett eller flera ord"
        afLabelDescription="Skriv in yrket du söker praktik för!"
        afVariation={FormInputSearchVariation.MEDIUM}
        afType={FormInputType.SEARCH}
        afButtonText="Sök"
        onAfOnSubmitSearch={handleSubmit}></DigiFormInputSearch>
    </>
  );
};
