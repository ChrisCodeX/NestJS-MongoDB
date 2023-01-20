import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto, UpdateBrandDto } from 'src/products/dtos/brands.dto';
import { Brand } from 'src/products/entities/brand.entity';

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async findAll() {
    return await this.brandModel.find().exec();
  }

  async findOne(brandId: string) {
    const brand = await this.brandModel.findById(brandId).exec();
    if (!brand) {
      throw new NotFoundException(`brand #${brandId} not found`);
    }
    return brand;
  }

  async create(payload: CreateBrandDto) {
    const newBrand = new this.brandModel(payload);
    return await newBrand.save();
  }

  async update(brandId: string, changes: UpdateBrandDto) {
    const brand = await this.brandModel
      .findOneAndUpdate(
        {
          _id: brandId,
        },
        {
          $set: changes,
        },
        {
          new: true,
        },
      )
      .exec();
    if (!brand) {
      throw new NotFoundException(`brand #${brandId} not found`);
    }
    return brand;
  }

  async remove(brandId: string) {
    const rta = await this.brandModel.findByIdAndDelete(brandId);
    if (!rta) {
      throw new NotFoundException(`brand #${brandId} not found`);
    }
    return rta;
  }
}
