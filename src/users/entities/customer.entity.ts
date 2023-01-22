import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// MongoDB schema
@Schema()
export class Customer extends Document {
  // Schema properties
  @Prop({ type: String })
  name: string;

  @Prop({ type: String })
  lastName: string;

  @Prop({ type: String })
  phone: string;
}

// Customer schema creation
export const CustomerSchema = SchemaFactory.createForClass(Customer);
