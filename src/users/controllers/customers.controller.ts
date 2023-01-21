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

  // /* Post Methods */
  // // Create a new customer
  // @Post()
  // create(@Body() payload: CreateCustomerDto) {
  //   return {
  //     message: this.customerService.create(payload),
  //   };
  // }

  // /* Patch Methods */
  // // Update a customer
  // @Patch('/:id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() payload: UpdateCustomerDto,
  // ) {
  //   return {
  //     message: this.customerService.update(id, payload),
  //   };
  // }

  // /* Delete Methods */
  // // Delete a customer
  // @Delete('/:id')
  // delete(@Param('id', ParseIntPipe) id: number) {
  //   return {
  //     message: this.customerService.delete(id),
  //   };
  // }
}
