import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IGroupedFinding } from './schemas/grouped.interface';
// import { RawFinding } from './schemas/raw.interface';

@Injectable()
export class FindingsService {
  constructor(
    @InjectModel('GroupedFinding')
    private readonly groupedFindingModel: Model<IGroupedFinding>,
  ) {}

  getAllFindings(): Promise<IGroupedFinding[]> {
    return this.groupedFindingModel.find().exec();
  }

  getFindingById(id: string): { message: string } {
    return { message: `Finding by id ${id}` };
  }
}
