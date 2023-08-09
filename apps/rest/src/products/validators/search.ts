import { IsOptional } from 'class-validator';

export class SearchProductDto {

  @IsOptional()
  q: string;

  @IsOptional()
  sort: string;

  @IsOptional()
  page: number;

  @IsOptional()
  perPage: number;
}
