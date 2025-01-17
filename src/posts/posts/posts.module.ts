import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostsSchema } from 'src/schema/Posts.schema';
import { User, UserSchema } from 'src/schema/User.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Posts.name,
        schema: PostsSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
