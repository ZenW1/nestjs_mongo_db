import { Prop, Schema } from '@nestjs/mongoose';
import { IsOptional, IsString, MaxLength } from 'class-validator';

@Schema()
export class PostsDTO {
  @Prop({ required: true })
  @IsString()
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
