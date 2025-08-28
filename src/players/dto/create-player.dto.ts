import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreatePlayerDto {
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  name: string;
}