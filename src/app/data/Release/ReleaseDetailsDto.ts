import {ConditionDto} from '../Condition/ConditionDto';

export class ReleaseDetailsDto {
  ArtistName ?: string;
  Title ?: string;
  ReleaseYear ?: number;
  Country?: string;
  Condition?: ConditionDto;
  Style?: string[];
  Genre?: string[];
}

