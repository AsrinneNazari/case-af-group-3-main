import { IHit } from "./IHit";
import { ITotal } from "./ITotal";

export interface IResult {
total: ITotal;
hits: IHit[];
}