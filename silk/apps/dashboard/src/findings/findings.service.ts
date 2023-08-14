import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IGroupedFinding } from './schemas/grouped.interface';
import { IRawFinding } from './schemas/raw.interface';
// import { RawFinding } from './schemas/raw.interface';

@Injectable()
export class FindingsService {
  constructor(
    @InjectModel('GroupedFinding')
    private readonly groupedFindingModel: Model<IGroupedFinding>,

    @InjectModel('RawFinding')
    private readonly rawFindingModel: Model<IRawFinding>,
  ) {}

  getGroupedFindings(): Promise<IGroupedFinding[]> {
    return this.groupedFindingModel.find();
  }

  getRawFindings(): Promise<IGroupedFinding[]> {
    return this.rawFindingModel.find();
  }
}
