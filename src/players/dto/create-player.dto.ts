import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreatePlayerDto {
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  readonly phone: string;
  @IsNotEmpty()
  name: string;
}