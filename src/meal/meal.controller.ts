import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MealService } from './meal.service';
import { Meal } from './schema/meal/meal.schema';

@Controller('meals')
export class MealController {
  constructor(private readonly mealService: MealService) {}

  @Get()
  getAllMeals(): Promise<Meal[]> {
    return this.mealService.getAllMeals();
  }

  @Get(':id')
  getMealById(@Param('id') id: string): Promise<Meal> {
    return this.mealService.getMealById(id);
  }

  @Post()
  createMeal(@Body() meal: Meal): Promise<Meal> {
    return this.mealService.createMeal(meal);
  }

  @Put(':id')
  updateMeal(
    @Param('id') id: string,
    @Body() updateData: Partial<Meal>,
  ): Promise<Meal> {
    return this.mealService.updateMeal(id, updateData);
  }

  @Delete(':id')
  deleteMeal(@Param('id') id: string): Promise<Meal> {
    return this.mealService.deleteMeal(id);
  }
}
