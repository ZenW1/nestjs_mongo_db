import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserSettings {
  @Prop({ required: false })
  receiveNotification?: boolean;

  @Prop({ required: false })
  receiveEmailNotification?: boolean;

  @Prop({ required: false })
  receiveSMSNotification?: boolean;
}

export const UserSettingSchema = SchemaFactory.createForClass(UserSettings);
