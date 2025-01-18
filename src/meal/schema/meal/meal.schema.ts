import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MealDocument = Meal & Document;

@Schema()
export class Meal {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  image: string;
}

export const MealSchema = SchemaFactory.createForClass(Meal);
