import { Body, Controller, Get, Param, Patch, Req } from '@nestjs/common'
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
  updateStatus(@Body('id') id: number, @Body('status') status: string) {
    return this.findingsService.updateStatus(id, status)
  }
}
