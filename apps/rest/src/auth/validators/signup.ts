import { IsUnique } from '@libs/boat/validator';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class SignUpDto {
  @IsUnique({ table: 'users', column: 'email' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsUnique({ table: 'users', column: 'userName' })
  @IsString()
  @IsNotEmpty()
  userName: string;

  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @MinLength(3)
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
