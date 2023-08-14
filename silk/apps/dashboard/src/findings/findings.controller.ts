import { Controller, Get, Param } from '@nestjs/common';

import { FindingsService } from './findings.service';
import { IGroupedFinding } from './schemas/grouped.interface';
import { IRawFinding } from './schemas/raw.interface';

@Controller('findings')
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  @Get('grouped')
  findGroupedFindings(): Promise<IGroupedFinding[]> {
    return this.findingsService.getGroupedFindings();
  }

  @Get('raw/:id?')
  findRawFindings(@Param('id') id: number): Promise<IRawFinding[]> {
    return id
      ? this.findingsService.getRawFindings(id)
      : this.findingsService.getRawFindings();
  }
}
