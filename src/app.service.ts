<<<<<<< HEAD
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'config';

@Injectable()
export class AppService {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  getHello(): string {
    const apiKey = this.configService.apiKey;
    const dbName = this.configService.database.name;
    console.log(apiKey);
    return `Hello World! ${apiKey} - ${dbName}`;
=======
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject('API_KEY') private apiKey: string) {}

  getHello(): string {
    return `Hello World! ${this.apiKey}`;
>>>>>>> c302b13 (user module import product service)
  }
}
