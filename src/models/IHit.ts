import { IEmployer } from "./IEmployer";
import { IWorkplaceAdress } from "./IWorkplaceAdress";

export interface IHit {
  id: string;
  webpage_url: string;
  employer: IEmployer;
  workplace_address: IWorkplaceAdress;
}
