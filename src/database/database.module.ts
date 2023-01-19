import { Module, Global } from '@nestjs/common';

const API_KEY_DEV = 'dev_123';
const API_KEY_PROD = 'prod_321';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'dev' ? API_KEY_DEV : API_KEY_PROD,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}
