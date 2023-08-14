import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindingsController } from '../findings/findings.controller';
import { FindingsService } from '../findings/findings.service';
import { GroupedFindingSchema } from '../findings/schemas/grouped.schema';
import { RawFindingSchema } from '../findings/schemas/raw.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.env.PWD}/apps/dashboard/${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(
      `${process.env.NX_MONGO_PROTOCOL}://${process.env.NX_MONGO_USERNAME}:${process.env.NX_MONGO_PASSWORD}@${process.env.NX_MONGO_HOST}`,
      { dbName: 'findings' },
    ),
    MongooseModule.forFeature([
      {
        name: 'GroupedFinding',
        schema: GroupedFindingSchema,
        collection: 'grouped_findings',
      },
      {
        name: 'RawFinding',
        schema: RawFindingSchema,
        collection: 'raw_findings',
      },
    ]),
  ],
  controllers: [AppController, FindingsController],
  providers: [AppService, FindingsService],
})
export class AppModule {}
