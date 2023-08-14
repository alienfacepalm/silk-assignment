import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FindingsService } from './findings.service';
import { GroupedFindingsSchema } from './schemas/grouped.schema';
import { RawFindingsSchema } from './schemas/raw.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'GroupedFindings', schema: GroupedFindingsSchema },
      { name: 'RawFindings', schema: RawFindingsSchema },
    ]),
  ],
  providers: [FindingsService],
})
export class FindingsModule {}
