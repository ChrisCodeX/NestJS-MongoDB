import { Field, InputType } from '@nestjs/graphql';
import { PartialType, ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCustomerDto {
  @ApiProperty()
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @Field()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @Field()
  @IsString()
  @IsNotEmpty()
  phone: string;
}

@InputType()
export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {}
