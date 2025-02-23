import { IResult } from "../models/IResult";
import { get } from "./serviceBase";

export const getSearch = async (searchText: string, offset: number, pageSize: number): Promise<IResult> => {
  const response = await get<IResult>(
    `https://jobsearch.api.jobtechdev.se/search?q=${searchText}&offset=${offset}&limit=${pageSize}`
  );
  return response;
};
