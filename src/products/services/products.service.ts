import { Injectable, NotFoundException } from '@nestjs/common';
// Mongo injection
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from 'src/products/entities/product.entity';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dto';

@Injectable()
export class ProductsService {
  // Product Schema injection
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  findAll() {
    return this.productModel.find().exec();
  }

  async findOne(productId: string) {
    const product = await this.productModel.findById(productId).exec();
    if (!product) {
      throw new NotFoundException(`product #${productId} not found`);
    }
    return product;
  }

  // create(data: CreateProductDto) {
  //   this.counterId += 1;
  //   const newProduct: Product = {
  //     id: this.counterId,
  //     ...data,
  //   };
  //   this.products.push(newProduct);
  //   return newProduct;
  // }

  // update(id: number, changes: UpdateProductDto) {
  //   const product = this.findOne(id);
  //   const index = this.products.findIndex((item) => item.id == id);
  //   this.products[index] = {
  //     ...product,
  //     ...changes,
  //   };
  //   return this.products[index];
  // }

  // remove(productId: number) {
  //   const productIndex = this.products.findIndex(
  //     (item) => item.id === productId - 1,
  //   );
  //   if (productIndex === -1) {
  //     throw new NotFoundException(`product #${productId} not found`);
  //   }
  //   this.products.splice(productIndex, 1);
  //   return true;
  // }
}
