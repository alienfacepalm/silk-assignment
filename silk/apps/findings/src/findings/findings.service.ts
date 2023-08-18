import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { IGroupedFinding } from './schemas/grouped.interface'
import { IRawFinding, IRawFindingCount } from './schemas/raw.interface'
import { IFinding } from './schemas/findings.interface'

@Injectable()
export class FindingsService {
  constructor(
    @InjectModel('GroupedFinding')
    private readonly groupedFindingModel: Model<IGroupedFinding>,

    @InjectModel('RawFinding')
    private readonly rawFindingModel: Model<IRawFinding>,
  ) {}

  /**
   * Retrieve all findings from database
   * @returns {Promise<IGroupedFinding[]>} A promise that resolves to an array of all findings.
   */
  async getAllFindings(): Promise<IFinding[]> {
    const aggregationPipeline = [
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
    ]

    return this.groupedFindingModel.aggregate(aggregationPipeline).exec()
  }
}
