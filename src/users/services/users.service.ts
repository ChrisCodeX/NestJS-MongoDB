import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsService } from 'src/products/services/products.service';
import { CreateUserDto, UpdateUserDto } from 'src/users/dtos/users.dto';
import { User } from 'src/users/entities/user.entity';
import { Order } from '../dtos/order.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      email: 'c.espinoza.code@gmail.com',
      password: '1234',
      role: 'customer',
    },
  ];
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService,
  ) {}

  findAll() {
    const apiKey = this.configService.get<string>('API_KEY');
    console.log(apiKey);
    return this.users;
  }

  findOne(id: number) {
    const userId = this.users.findIndex((item) => item.id === id);
    if (userId === -1) {
      throw new NotFoundException(`user ${id} not found`);
    }
    return this.users[userId];
  }

  create(payload: CreateUserDto) {
    this.counterId += 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, changes: UpdateUserDto) {
    const user = this.findOne(id);
    const userIndex = this.users.findIndex((item) => item.id === id);
    this.users[userIndex] = {
      ...user,
      ...changes,
    };
    return this.users[userIndex];
  }

  remove(id: number) {
    const userId = this.users.findIndex((item) => item.id === id);
    if (userId === -1) {
      throw new NotFoundException(`user ${id} not found`);
    }
    this.users.splice(userId, 1);
    return true;
  }

  getOrderByUser(id: number): Order {
    const user = this.findOne(id);
    return {
      date: new Date(),
      user,
      products: this.productsService.findAll(),
    };
  }
}
