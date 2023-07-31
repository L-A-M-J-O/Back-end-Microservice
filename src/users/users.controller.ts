import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UpdateUserActiveDto } from "./dto/updateActive-user.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("findAll")
  async findAll(): Promise<any[]> {
    return this.usersService.findAll();
  }
  @Get("findActive")
  async findeActive(): Promise<any[]> {
    return this.usersService.findeActive();
  }
  @Get("activeUser/:id")
  updateActiveGet(@Param("id") id: string) {
    return this.usersService.updateActiveGet(id, true);
  }
  @Get("deactiveUser/:id")
  updateOffGet(@Param("id") id: string) {
    return this.usersService.updateActiveGet(id, false);
  }
  @Get("findOne/:id")
  findOne(@Param("id") id: string) {
    return this.usersService.findOne(id);
  }
  @Post("createUser")
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
  @Post("updateIsActive")
  updateActive(@Body() updateUserActiveDto: UpdateUserActiveDto) {
    return this.usersService.updateActive(updateUserActiveDto);
  }
  @Post("updateName")
  updateName(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateName(updateUserDto);
  }
  @Put("findUpdate/:id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete("deleteUser/:id")
  remove(@Param("id") id: string) {
    console.log(id);
    return this.usersService.remove(id);
  }
}
