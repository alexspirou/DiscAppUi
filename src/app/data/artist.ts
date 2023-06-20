import { Link } from "./link";
import { MusicLabel } from "./musicLabel";

export interface Artist{

    artistId: number;
    artistName: string;
    realName?: string | null;
    links?: Link[];
    label?: MusicLabel[];
  }
