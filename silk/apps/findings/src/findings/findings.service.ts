import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { IGroupedFinding } from './schemas/grouped.interface'
import { IRawFinding } from './schemas/raw.interface'
import { IFinding } from './schemas/findings.interface'

@Injectable()
export class FindingsService {
  constructor(
    @InjectModel('GroupedFinding')
    private readonly groupedFindingModel: Model<IGroupedFinding>,

    @InjectModel('RawFinding')
    private readonly rawFindingModel: Model<IRawFinding>,
  ) {}

  async getAllFindings(): Promise<IFinding[]> {
    return this.groupedFindingModel
      .aggregate([
        {
          $lookup: {
            from: 'raw_findings',
            localField: 'id',
            foreignField: 'grouped_finding_id',
            as: 'rawFindings',
          },
        },
        {
          $group: {
            _id: '$_id',
            groupedFindings: { $first: '$$ROOT' },
            rawFindings: { $push: '$rawFindings' },
          },
        },
        {
          $replaceRoot: {
            newRoot: {
              $mergeObjects: [
                '$groupedFindings',
                { rawFindings: { $arrayElemAt: ['$rawFindings', 0] } },
              ],
            },
          },
        },
      ])
      .exec()
  }

  async updateStatus(
    id: number,
    type: 'grouped' | 'raw',
    status: string,
  ): Promise<any> {
    console.log({ id, type, status })
    switch (type) {
      case 'grouped':
        return this.groupedFindingModel.updateOne(
          { _id: id },
          { $set: { status } },
        )
      case 'raw':
        return this.rawFindingModel.updateOne({ _id: id }, { $set: { status } })
    }
  }
}
