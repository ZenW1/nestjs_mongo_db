import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsDTO } from '../dtos/Post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createPost(@Body() postDTO: PostsDTO) {
    return this.postsService.createPost(postDTO);
  }

  @Get()
  async getPost() {
    return this.postsService.getPost();
  }
}
