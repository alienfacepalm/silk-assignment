import { Controller, Get, Param } from '@nestjs/common'
import { FindingsService } from './findings.service'
import { IGroupedFinding } from './schemas/grouped.interface'
import { IRawFinding, IRawFindingCount } from './schemas/raw.interface'

@Controller('findings')
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  /**
   * Retrieve grouped findings.
   * @returns {Promise<IGroupedFinding[]>} - Array of grouped findings.
   */
  @Get('grouped')
  findGroupedFindings(): Promise<IGroupedFinding[]> {
    return this.findingsService.getGroupedFindings()
  }

  /**
   * Count the total number of raw findings.
   * @returns {Promise<IRawFindingCount[]>} - Count of raw findings.
   */
  @Get('raw/count')
  countRawFindings(): Promise<IRawFindingCount[]> {
    return this.findingsService.countRawFindings()
  }

  /**
   * Retrieve raw findings.
   * @param {number} [id] - Optional ID parameter to filter findings.
   * @returns {Promise<IRawFinding[]>} - Array of raw findings.
   */
  @Get('raw/:id?')
  findRawFindings(@Param('id') id?: number): Promise<IRawFinding[]> {
    return id
      ? this.findingsService.getRawFindings(id)
      : this.findingsService.getRawFindings()
  }
}
