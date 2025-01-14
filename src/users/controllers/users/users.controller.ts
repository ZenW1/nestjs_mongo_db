import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { UserDTO } from 'src/users/dtos/User.dto';
import { UpdateUserDTO } from 'src/users/dtos/UpdateUser.dto';
import mongoose from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createUser(@Body() userDTO: UserDTO) {
    try {
      await this.userService.createUser(userDTO);
    } catch (error) {
      if (error.code == 11000) {
        throw new HttpException('User already exist', 404);
      }
    }
  }

  @Get()
  async getAllUser() {
    return this.userService.getUser();
  }

  @Get(':id')
  getUserByID(@Param('id') id: string) {
    const valid = mongoose.Types.ObjectId.isValid(id);
    if (!valid) throw new HttpException('Invalid ID', 404);
    return this.userService.getUserByID(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  updateUser(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO) {
    const valid = mongoose.Types.ObjectId.isValid(id);
    if (!valid) throw new HttpException('Invalid ID', 404);
    return this.userService.updateUser(id, updateUserDTO);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  deleteUser(@Param('id') id: string) {
    const valid = mongoose.Types.ObjectId.isValid(id);
    if (!valid) throw new HttpException('Invalid ID', 404);
    return this.userService.deleteUser(id);
  }
}
