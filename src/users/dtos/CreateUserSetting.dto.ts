import { IsBoolean, IsOptional } from 'class-validator';

export class CreateUserSettingDTO {
  @IsOptional()
  @IsBoolean()
  receiveNotification?: boolean;
  @IsOptional()
  @IsBoolean()
  receiveEmailNotification: boolean;
  @IsOptional()
  @IsBoolean()
  receiveSMSNotification: boolean;
}
