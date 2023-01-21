import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomersService } from 'src/users/services/customers.service';
import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';
import { MongoIdPipe } from 'src/common/mongo-id/mongo-id.pipe';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  /* Get Methods */
  // Get all customers
  @Get()
  async getCustomers() {
    return {
      message: await this.customerService.findAll(),
    };
  }

  // Get a customer by id
  @Get('/:id')
  async getCustomer(@Param('id') customerId: string) {
    return {
      message: await this.customerService.findOne(customerId),
    };
  }

  /* Post Methods */
  // Create a new customer
  @Post()
  async create(@Body() payload: CreateCustomerDto) {
    return {
      message: await this.customerService.create(payload),
    };
  }

  /* Patch Methods */
  // Update a customer
  @Patch('/:id')
  async update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateCustomerDto,
  ) {
    return {
      message: await this.customerService.update(id, payload),
    };
  }

  // /* Delete Methods */
  // // Delete a customer
  // @Delete('/:id')
  // delete(@Param('id', ParseIntPipe) id: number) {
  //   return {
  //     message: this.customerService.delete(id),
  //   };
  // }
}
