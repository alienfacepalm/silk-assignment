import { Controller, Get, Param } from '@nestjs/common';

import { FindingsService } from './findings.service';
import { IGroupedFinding } from './schemas/grouped.interface';

@Controller('findings')
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  @Get()
  findAll(): Promise<IGroupedFinding[]> {
    return this.findingsService.getAllFindings();
  }

  @Get(':id')
  findFindingById(@Param('id') id: string): { message: string } {
    return this.findingsService.getFindingById(id);
  }
}
