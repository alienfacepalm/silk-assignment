import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { IGroupedFinding } from './schemas/grouped.interface';
import { IRawFinding } from './schemas/raw.interface';

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

  getRawFindings(grouped_finding_id?: number): Promise<IRawFinding[]> {
    return grouped_finding_id
      ? this.rawFindingModel.find({ grouped_finding_id })
      : this.rawFindingModel.find();
  }
}
