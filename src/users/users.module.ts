import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schema/User.schema';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './users/users.service';
import { UserSettings, UserSettingSchema } from 'src/schema/UserSetting.schema';
import { Posts, PostsSchema } from 'src/schema/Posts.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: UserSettings.name,
        schema: UserSettingSchema,
      },
      {
        name: Posts.name,
        schema: PostsSchema,
      },
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
