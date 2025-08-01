import { IsEmail, IsEnum, IsNotEmpty, IsPhoneNumber, IsString, Length, Matches, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserType } from 'generated/prisma';

export class RegisterDto {
  @ApiProperty({
    description: 'Email address of the user',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: 'Phone number of the user',
    example: '+1234567890',
  })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'User password',
    example: 'Password123!',
    required: true,
    minLength: 8,
    maxLength: 32,
  })
  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password must be a string' })
  @Length(8, 32, { message: 'Password must be between 8 and 32 characters' })
  password: string;

  @ApiProperty({
    description: 'Full name of the user',
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Type of user',
    enum: UserType,
    example: UserType.WORKER,
  })
  @IsEnum(UserType)
  @IsNotEmpty()
  UserType: UserType;
}
