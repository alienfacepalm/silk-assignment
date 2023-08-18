import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { IGroupedFinding } from './schemas/grouped.interface'
import { IFinding } from './schemas/findings.interface'

@Injectable()
export class FindingsService {
  constructor(
    @InjectModel('GroupedFinding')
    private readonly groupedFindingModel: Model<IGroupedFinding>,
  ) {}

  /**
   * Retrieve all findings from database
   * @returns {Promise<IGroupedFinding[]>} A promise that resolves to an array of all findings.
   */
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
}
