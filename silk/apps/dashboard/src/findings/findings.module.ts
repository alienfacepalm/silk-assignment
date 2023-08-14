import { Module } from '@nestjs/common';
import { FindingsService } from './findings.service';

@Module({
  providers: [FindingsService]
})
export class FindingsModule {}
