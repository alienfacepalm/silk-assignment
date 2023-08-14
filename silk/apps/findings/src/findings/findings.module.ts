import { Module } from '@nestjs/common'

import { FindingsService } from './findings.service'

@Module({
  imports: [],
  providers: [FindingsService],
})
export class FindingsModule {}
