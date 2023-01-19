import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';
import { UsersService } from 'src/users/services/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  // Get all users
  @ApiOperation({ summary: 'List of all users' })
  @Get()
  getUsers() {
    return {
      message: this.userService.findAll(),
    };
  }

  // Get a user
  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return {
      message: this.userService.findOne(id),
    };
  }

  // Get user order
  @Get('/:id/orders')
  getOrders(@Param('id', ParseIntPipe) id: number) {
    return {
      message: this.userService.getOrderByUser(id),
    };
  }

  // Create a user
  @Post()
  create(@Body() payload: CreateUserDto) {
    return {
      message: 'created',
      payload: this.userService.create(payload),
    };
  }

  // Update a user
  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return {
      message: 'updated',
      payload: this.userService.update(id, payload),
    };
  }

  // Delete a user
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return {
      message: 'deleted',
      payload: this.userService.remove(id),
    };
  }
}
