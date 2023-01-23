import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { Document } from 'mongoose';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

export class Order extends Document {
  @Prop({ type: Date })
  date: Date;

  // @Prop({type})
  user: User;

  product: Product[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
