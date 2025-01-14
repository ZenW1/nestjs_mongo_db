import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UserSettings } from './UserSetting.schema';
import { Posts } from './Posts.schema';

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ unique: true, required: true })
  username: string;

  @Prop({ required: false })
  displayName?: string;

  @Prop({ required: false })
  avatarUrl?: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSettings',
    required: false,
  })
  settings?: UserSettings;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts',
    required: false,
  })
  posts?: Posts;
}

export const UserSchema = SchemaFactory.createForClass(User);
