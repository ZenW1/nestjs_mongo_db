import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsOptional, MaxLength } from 'class-validator';

@Schema()
export class Posts {
  @Prop()
  @IsOptional()
  userId: string;

  @Prop()
  @IsOptional()
  @MaxLength(100)
  title: string;

  @Prop()
  @IsOptional()
  @MaxLength(500)
  content: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);
