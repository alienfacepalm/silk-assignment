import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FindingsController } from '../findings/findings.controller';
import { FindingsService } from '../findings/findings.service';

@Module({
  imports: [],
  controllers: [AppController, FindingsController],
  providers: [AppService, FindingsService],
})
export class AppModule {}
