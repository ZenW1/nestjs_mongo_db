import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'insert your mongodb connection string here',
    ),
    UsersModule,
    PostsModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
