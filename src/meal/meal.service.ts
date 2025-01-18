import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Meal } from './schema/meal/meal.schema';

@Injectable()
export class MealService {
  constructor(@InjectModel('Meal') private readonly mealModel: Model<Meal>) {}

  async getAllMeals(): Promise<Meal[]> {
    return this.mealModel.find().exec();
  }

  async getMealById(id: string): Promise<Meal> {
    const meal = await this.mealModel.findOne({ id }).exec();
    if (!meal) throw new NotFoundException(`Meal with ID ${id} not found`);
    return meal;
  }

  async createMeal(meal: Meal): Promise<Meal> {
    const newMeal = new this.mealModel(meal);
    return newMeal.save();
  }

  async updateMeal(id: string, updateData: Partial<Meal>): Promise<Meal> {
    const updatedMeal = await this.mealModel
      .findOneAndUpdate({ id }, updateData, { new: true })
      .exec();
    if (!updatedMeal)
      throw new NotFoundException(`Meal with ID ${id} not found`);
    return updatedMeal;
  }

  async deleteMeal(id: string): Promise<Meal> {
    const deletedMeal = await this.mealModel.findOneAndDelete({ id }).exec();
    if (!deletedMeal)
      throw new NotFoundException(`Meal with ID ${id} not found`);
    return deletedMeal;
  }
}
