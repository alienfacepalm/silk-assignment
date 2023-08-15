import { Controller, Get, Param } from '@nestjs/common'

import { FindingsService } from './findings.service'
import { IGroupedFinding } from './schemas/grouped.interface'
import { IRawFinding, IRawFindingCount } from './schemas/raw.interface'

@Controller('findings')
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  @Get('grouped')
  findGroupedFindings(): Promise<IGroupedFinding[]> {
    return this.findingsService.getGroupedFindings()
  }

  @Get('raw/count')
  countRawFindings(): any {
    return this.findingsService.countRawFindings()
  }

  @Get('raw/:id?')
  findRawFindings(@Param('id') id: number): Promise<IRawFinding[]> {
    return id
      ? this.findingsService.getRawFindings(id)
      : this.findingsService.getRawFindings()
  }
}
