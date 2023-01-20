import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String })
  description: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Number })
  stock: number;

  @Prop({ type: String })
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
