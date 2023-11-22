import { ReleaseDetailsDto } from "./Release/ReleaseDetailsDto";


export class ArtistDetails {
  ArtistName ?: string;
  RealName: string | undefined;
  Country: string | null = null;
  Releases: ReleaseDetailsDto[] | undefined;
  Links: string[] | undefined;
}