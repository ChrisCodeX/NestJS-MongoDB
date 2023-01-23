import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';
import { CreateOrderDto, UpdateOrderDto } from '../dtos/order.dto';
import { OrdersService } from '../services/orders.service';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  /* Get Methods */
  // Get all orders
  @Get()
  async getOrders() {
    return {
      message: await this.orderService.findAll(),
    };
  }

  // Get an order by id
  @Get('/:id')
  async getOrder(@Param('id', MongoIdPipe) orderId: string) {
    return {
      message: await this.orderService.findOne(orderId),
    };
  }

  /* Post Methods */
  // Create an order
  @Post()
  async createOrder(@Body() payload: CreateOrderDto) {
    return {
      message: await this.orderService.create(payload),
    };
  }

  /* Patch Methods */
  // Update an order
  @Patch('/:id')
  async updateOrder(
    @Param('id', MongoIdPipe) orderId: string,
    @Body() payload: UpdateOrderDto,
  ) {
    return {
      message: await this.orderService.update(orderId, payload),
    };
  }

  /* Delete Methods */
  // Delete an order
  @Delete('/:id')
  async deleteOrder(@Param('id', MongoIdPipe) orderId: string) {
    return {
      message: await this.orderService.remove(orderId),
    };
  }
}
