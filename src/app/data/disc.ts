import { Artist } from "./artist";
import { Genre } from "./genre";

export interface Disc
{
    discId :number;
    title : string;
    artist : Artist;
    country :string;
    releaseYear: number;
    genre : Genre 
    condition :string;
}