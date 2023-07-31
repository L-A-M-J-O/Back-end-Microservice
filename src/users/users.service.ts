import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserActiveDto } from "./dto/updateActive-user.dto";
import { Users, UserDocument } from "./model/user.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UserDocument>
  ) {}

  create(createUserDto: CreateUserDto) {
    const userCreate = this.usersModel.create(createUserDto);
    return userCreate;
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find();
  }
  findeActive() {
    return this.usersModel.find({ isActive: true }).exec();
  }
  findOne(id: string) {
    return this.usersModel.findById(id).exec();
  }
  updateActiveGet(id: string, active: boolean) {
    return this.usersModel.findByIdAndUpdate(id, { isActive: active });
  }
  updateActive(updateUserActiveDto: UpdateUserActiveDto) {
    return this.usersModel.findByIdAndUpdate(updateUserActiveDto.id, {
      isActive: updateUserActiveDto.isActive
    });
  }
  updateName(updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(updateUserDto.id, {
      name: updateUserDto.name,
      email: updateUserDto.email
    });
  }
  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.usersModel.findByIdAndDelete(id).exec();
  }
}
