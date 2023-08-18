import { Controller, Get, Param } from '@nestjs/common'
import { FindingsService } from './findings.service'
import { IFinding } from './schemas/findings.interface'

@Controller('findings')
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  /**
   * Retrieve all findings with rawFindings combined
   * @returns {Promise<IFinding[]>} - Array of all findings.
   */
  @Get('all')
  findAllFindings(): Promise<IFinding[]> {
    return this.findingsService.getAllFindings()
  }
}
