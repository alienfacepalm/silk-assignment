import { UpdateWriteOpResult } from 'mongoose'

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
  async updateFindingStatus(
    @Body('id') id: number,
    @Body('type') type: 'grouped' | 'raw',
    @Body('status') status: string,
  ): Promise<UpdateWriteOpResult> {
    return this.findingsService.updateFindingStatus(id, type, status)
  }
}
