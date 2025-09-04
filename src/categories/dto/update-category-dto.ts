import { ArrayMinSize, IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Events } from "../interface/category.interface";

export class UpdateCategoryDto {

  @IsString()
  @IsOptional()
  description: string;

  @IsArray()
  @ArrayMinSize(1)
  events: Array<Events>
}