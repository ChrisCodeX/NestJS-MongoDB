import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from 'src/products/dtos/categories.dto';
import { CategoriesService } from 'src/products/services/categories.service';

@ApiTags('categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  // Get all categories
  // @Get()
  // getCategories() {
  //   return {
  //     message: this.categoriesService.findAll(),
  //   };
  // }

  // // Get a category by id
  // @Get('/:id')
  // getCategory(@Param('id', ParseIntPipe) id: number) {
  //   return {
  //     message: this.categoriesService.findOne(id),
  //   };
  // }

  // // Create a category
  // @Post()
  // create(@Body() payload: CreateCategoryDto) {
  //   return {
  //     message: 'created',
  //     payload: this.categoriesService.create(payload),
  //   };
  // }

  // // Update a category
  // @Patch('/:id')
  // update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() payload: UpdateCategoryDto,
  // ) {
  //   return {
  //     message: 'updated',
  //     payload: this.categoriesService.update(id, payload),
  //   };
  // }

  // // Delete a category
  // @Delete('/:id')
  // delete(@Param('id', ParseIntPipe) id: number) {
  //   return {
  //     message: 'deleted',
  //     payload: this.categoriesService.remove(id),
  //   };
  // }
}
