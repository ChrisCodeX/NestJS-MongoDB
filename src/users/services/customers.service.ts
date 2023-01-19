import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from 'src/users/entities/customer.entity';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Christian',
      lastName: 'Espinoza',
      phone: '123456789',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customerId = this.customers.findIndex((item) => item.id === id);
    if (customerId === -1) {
      throw new NotFoundException(`customer ${id} not found`);
    }
    return this.customers[customerId];
  }

  create(payload: CreateCustomerDto) {
    this.counterId += 1;
    const customer: Customer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(customer);
    return customer;
  }

  update(id: number, changes: UpdateCustomerDto) {
    const customer = this.findOne(id);
    const index = this.customers.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new NotFoundException(`customer ${id} not found`);
    }
    this.customers[index] = {
      ...customer,
      ...changes,
    };
    return this.customers[index];
  }

  delete(id: number) {
    const index = this.customers.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`customer ${id} not found`);
    }
    this.customers.splice(index, 1);
    return true;
  }
}
