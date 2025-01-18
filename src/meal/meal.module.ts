import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MealService } from './meal.service';
import { MealController } from './meal.controller';
import { MealSchema } from './schema/meal/meal.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Meal', schema: MealSchema }])],
  controllers: [MealController],
  providers: [MealService],
})
export class MealModule {}
