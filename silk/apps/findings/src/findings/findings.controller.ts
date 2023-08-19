import { Body, Controller, Get, Patch } from '@nestjs/common'
import { FindingsService } from './findings.service'
import { IFinding } from './schemas/findings.interface'

@Controller('findings')
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  @Get('all')
  async findAllFindings(): Promise<IFinding[]> {
    return this.findingsService.getAllFindings()
  }

  @Patch('/status')
  updateStatus(
    @Body('id') id: number,
    @Body('type') type: 'grouped' | 'raw',
    @Body('status') status: string,
  ) {
    return this.findingsService.updateStatus(id, type, status)
  }
}
