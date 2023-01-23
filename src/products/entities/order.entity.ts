import { Document, Types } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

import { Product, ProductSchema } from 'src/products/entities/product.entity';
import { Customer } from 'src/users/entities/customer.entity';

// Order schema for DB
export class Order extends Document {
  /* Schema properties */
  @Prop({ type: Date })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  customer: Customer | Types.ObjectId;

  // Other way
  // @Prop({ type: [{ type: Types.ObjectId, ref: Product.name }] })
  @Prop({ type: [ProductSchema] })
  products: Types.Array<Product>;
}

// Order schema creation
export const OrderSchema = SchemaFactory.createForClass(Order);
