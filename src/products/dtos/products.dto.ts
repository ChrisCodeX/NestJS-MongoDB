import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';

import { Field, InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';

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
}

@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {}
