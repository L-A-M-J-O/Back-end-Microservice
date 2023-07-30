import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
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
  findeActive(isActive: boolean) {
    return this.usersModel.find({ isActive: isActive }).exec();
  }
  findOne(id: string) {
    return this.usersModel.findById(id).exec();
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(id, updateUserDto);
  }

  remove(id: string) {
    return this.usersModel.findByIdAndDelete(id).exec();
  }
}
