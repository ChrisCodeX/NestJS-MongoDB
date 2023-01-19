import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

/* This is a pipe customized */
// import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

// Product Service import
import { ProductsService } from 'src/products/services/products.service';

// Products Dto import
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dto';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  /* Get Methods */
  @HttpCode(HttpStatus.ACCEPTED)
  @Get()
  getProducts(@Query('limit') limit: number, @Query('offset') offset: number) {
    return {
      message: this.productService.findAll(),
    };
  }

  @Get('/:productId')
  getProduct(@Param('productId', ParseIntPipe) productId: number) {
    return {
      message: this.productService.findOne(productId),
    };
  }

  /* Post Methods */
  @Post()
  create(@Body() payload: CreateProductDto) {
    const newProduct = this.productService.create(payload);
    return {
      message: 'created',
      newProduct,
    };
  }

  /* Patch Methods */
  @Patch('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    const product = this.productService.update(id, payload);
    return {
      message: 'updated',
      payload: {
        product,
      },
    };
  }

  /* Deleted Methods */
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
