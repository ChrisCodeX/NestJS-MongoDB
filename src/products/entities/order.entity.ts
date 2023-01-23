import { Document, Types } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

import { Product } from 'src/products/entities/product.entity';
import { Customer } from 'src/users/entities/customer.entity';

export class Order extends Document {
  @Prop({ type: Date })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  customer: Customer | Types.ObjectId;

  product: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
