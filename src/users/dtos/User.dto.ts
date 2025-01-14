import { IsNotEmpty, IsOptional, ValidateNested } from 'class-validator';
import { CreateUserSettingDTO } from './CreateUserSetting.dto';
import { PostsDTO } from 'src/posts/dtos/Post.dto';

export class UserDTO {
  id: string;
  @IsNotEmpty()
  username: string;
  displayName: string;
  avatarUrl: string;
  @IsOptional()
  @ValidateNested()
  settings: CreateUserSettingDTO;
  @IsOptional()
  @ValidateNested()
  post: PostsDTO;
}
