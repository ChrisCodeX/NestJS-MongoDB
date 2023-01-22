import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateSkillDto {
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

export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
