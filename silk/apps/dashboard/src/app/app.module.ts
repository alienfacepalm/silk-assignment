import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindingsController } from '../findings/findings.controller';
import { FindingsService } from '../findings/findings.service';

// TODO: use ENVVAR FOR MONGO URI
// TODO: lockdown as forFeature
// TODO: schemas

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `${process.env.NODE_ENV}.env` }),
    MongooseModule.forRoot(
      'mongodb+srv://silk:AeeozKBYwnnNCutV@pliska-mongo-cluster-0.q3in4me.mongodb.net/?retryWrites=true&w=majority',
      { dbName: 'findings' },
    ),
  ],
  controllers: [AppController, FindingsController],
  providers: [AppService, FindingsService],
})
export class AppModule {}
