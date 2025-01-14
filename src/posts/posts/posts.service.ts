import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Posts } from 'src/schema/Posts.schema';
import { User } from 'src/schema/User.schema';
import { PostsDTO } from '../dtos/Post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name) private readonly postModel: Model<Posts>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async createPost({ userId, ...postDTO }: PostsDTO): Promise<Posts> {
    console.info('userId', userId);

    const findId = await this.userModel.findById(userId);
    if (!findId) throw new HttpException('User Id not found', 404);

    const newPost = new this.postModel({ ...postDTO, user: userId });

    await findId.updateOne({ $push: { posts: newPost._id } });

    return newPost.save();
  }

  async getPost(): Promise<Posts[]> {
    return this.postModel.find();
  }
}
