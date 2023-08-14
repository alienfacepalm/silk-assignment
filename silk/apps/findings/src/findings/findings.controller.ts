import { Controller, Get, Param } from '@nestjs/common'

import { FindingsService } from './findings.service'
import { IGroupedFinding } from './schemas/grouped.interface'
import { IRawFinding } from './schemas/raw.interface'

@Controller('findings')
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  /**
   * Retrieves an array of grouped findings from the findings service.
   * @returns {Promise<IGroupedFinding[]>} A promise that resolves to an array of grouped findings.
   */
  @Get('grouped')
  findGroupedFindings(): Promise<IGroupedFinding[]> {
    return this.findingsService.getGroupedFindings()
  }

  /**
   * Retrieves an array of raw findings from the findings service.
   * If an ID is provided, it fetches raw findings associated with that ID.
   * If no ID is provided, it fetches all raw findings.
   * @param {number} id (Optional) The ID of the raw findings to retrieve.
   * @returns {Promise<IRawFinding[]>} A promise that resolves to an array of raw findings.
   */
  @Get('raw/:id?')
  findRawFindings(@Param('id') id: number): Promise<IRawFinding[]> {
    return id
      ? this.findingsService.getRawFindings(id)
      : this.findingsService.getRawFindings()
  }
}
