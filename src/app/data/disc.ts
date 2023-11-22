import { ArtistDto } from "./artistDetails";
import { Genre } from "./genre";

export interface Disc
{
    discId :number;
    title : string;
    artist : ArtistDto;
    country :string;
    releaseYear: number;
    genre : Genre 
    condition :string;
}