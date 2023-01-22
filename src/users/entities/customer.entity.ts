import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

// customer schema for DB
@Schema()
export class Customer extends Document {
  // Schema properties
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  phone: string;

  @Prop({ type: [{ name: { type: String }, color: { type: String } }] })
  skills: Types.Array<Record<string, any>>;
}

// Customer schema creation
export const CustomerSchema = SchemaFactory.createForClass(Customer);
