import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/services/user.service';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  /*@Put(':id')
  update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  } */

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
