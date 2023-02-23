import { ShowTypeEnum, PlotTypeEnum } from './enums/movieEnum';

export interface MovieSearchParams {
    Title: string,
    Year: string
    Type: ShowTypeEnum,
    Plot: PlotTypeEnum,
}