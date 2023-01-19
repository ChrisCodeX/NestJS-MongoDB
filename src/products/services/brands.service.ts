import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dto';
import { Brand } from 'src/products/entities/brand.entity';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Xiaomi',
      image: 'https://google.com/123',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brandId = this.brands.findIndex((item) => item.id === id);
    if (brandId === -1) {
      throw new NotFoundException(`brand ${id} not found`);
    }
    return this.brands[brandId];
  }

  create(payload: CreateBrandDto) {
    this.counterId += 1;
    this.brands.push({
      id: this.counterId,
      ...payload,
    });
    return payload;
  }

  update(id: number, changes: UpdateBrandDto) {
    const brand = this.findOne(id);
    const index = this.brands.findIndex((item) => item.id === id);
    this.brands[index] = {
      ...brand,
      ...changes,
    };
    return this.brands[index];
  }

  delete(id: number) {
    const brandId = this.brands.findIndex((item) => item.id === id);
    if (brandId === -1) {
      throw new NotFoundException(`brand ${id} not found`);
    }
    this.brands.splice(brandId, 1);
    return true;
  }
}
