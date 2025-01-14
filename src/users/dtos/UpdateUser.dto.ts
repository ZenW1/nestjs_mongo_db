import { IsOptional, IsString } from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  username: string;
  @IsOptional()
  @IsString()
  displayName: string;
  @IsOptional()
  @IsString()
  avatarUrl: string;
}
