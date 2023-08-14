import { Controller, Get, Param } from '@nestjs/common';

import { FindingsService } from './findings.service';
import { IGroupedFinding } from './schemas/grouped.interface';

@Controller('findings')
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  @Get('grouped')
  findGroupedFindings(): Promise<IGroupedFinding[]> {
    return this.findingsService.getGroupedFindings();
  }

  @Get('raw')
  findRawFindings(): Promise<IGroupedFinding[]> {
    return this.findingsService.getRawFindings();
  }
}
