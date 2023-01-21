import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from 'src/users/entities/customer.entity';
import { Model } from 'mongoose';

import {
  CreateCustomerDto,
  UpdateCustomerDto,
} from 'src/users/dtos/customers.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async findAll() {
    return new Promise(async (resolve) => {
      const customers = await this.customerModel.find().exec();
      resolve(customers);
    });
  }

  async findOne(customerId: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const customer = await this.customerModel.findById(customerId).exec();
        if (!customer) {
          throw new NotFoundException(`customer #${customerId} not found`);
        }
        resolve(customer);
      } catch (error) {
        reject(error);
      }
    });
  }

  // create(payload: CreateCustomerDto) {
  //   this.counterId += 1;
  //   const customer: Customer = {
  //     id: this.counterId,
  //     ...payload,
  //   };
  //   this.customers.push(customer);
  //   return customer;
  // }

  // update(id: number, changes: UpdateCustomerDto) {
  //   const customer = this.findOne(id);
  //   const index = this.customers.findIndex((item) => item.id === id);

  //   if (index === -1) {
  //     throw new NotFoundException(`customer ${id} not found`);
  //   }
  //   this.customers[index] = {
  //     ...customer,
  //     ...changes,
  //   };
  //   return this.customers[index];
  // }

  // delete(id: number) {
  //   const index = this.customers.findIndex((item) => item.id === id);
  //   if (index === -1) {
  //     throw new NotFoundException(`customer ${id} not found`);
  //   }
  //   this.customers.splice(index, 1);
  //   return true;
  // }
}
