import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
<<<<<<< HEAD
import { DatabaseModule } from './database/database.module';
import { environments } from 'environments';
import config from 'config';
=======
import { async } from 'rxjs';

const API_KEY_DEV = 'dev_123';
const API_KEY_PROD = 'prod_321';
>>>>>>> c302b13 (user module import product service)

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      // config file validation
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    HttpModule,
    UsersModule,
    ProductsModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'dev' ? API_KEY_DEV : API_KEY_PROD,
    },
  ],
})
export class AppModule {}
