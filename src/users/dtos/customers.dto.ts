import { Field, InputType } from '@nestjs/graphql';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';

@InputType()
class Skill {
  @ApiProperty()
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly color: string;
}

@InputType()
export class CreateCustomerDto {
  @ApiProperty()
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiProperty()
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty()
  @Field()
  @IsNotEmpty()
  @ValidateNested()
  @IsArray()
  @ArrayNotEmpty()
  readonly skills: Skill;
}

@InputType()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
