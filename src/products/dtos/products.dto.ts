import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
  IsOptional,
  Min,
  ValidateIf,
  // Validation document embedded
  ValidateNested,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';

import { CreateCategoryDto } from '../dtos/categories.dto';

@InputType()
export class CreateProductDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;

  @Field()
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @Field()
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;

  @Field()
  @ValidateNested()
  @IsNotEmpty()
  readonly category: CreateCategoryDto;
}

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {}

@InputType()
export class FilterProductsDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

  @IsOptional()
  @Min(0)
  minPrice: number;

  @ValidateIf((params) => params.minPrice)
  @IsPositive()
  maxPrice: number;
}
