import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/User.schema';
import { UserDTO } from '../dtos/User.dto';
import { UpdateUserDTO } from '../dtos/UpdateUser.dto';
import { UserSettings } from 'src/schema/UserSetting.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(UserSettings.name)
    private readonly userSettingsModel: Model<UserSettings>,
  ) {}

  async createUser({ settings, ...userDTO }: UserDTO): Promise<User> {
    if (settings) {
      const newUserSettings = new this.userSettingsModel(settings);
      const newSettings = await newUserSettings.save();
      return this.userModel.create({ ...userDTO, settings: newSettings._id });
    }
    const user = new this.userModel(userDTO);
    return user.save();
  }

  async getUser(): Promise<User[]> {
    return await this.userModel.find().populate('posts');
  }

  async getUserByID(id: string): Promise<User> {
    return await this.userModel
      .findById(id)
      .populate('posts')
      .populate('settings');
  }

  async updateUser(id: string, updateUserDTO: UpdateUserDTO): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      id,
      { $set: updateUserDTO },
      { new: true },
    );
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.findByIdAndDelete(id);
  }
}
