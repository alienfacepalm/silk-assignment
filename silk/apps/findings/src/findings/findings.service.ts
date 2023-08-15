import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { IGroupedFinding } from './schemas/grouped.interface'
import { IRawFinding, IRawFindingCount } from './schemas/raw.interface'

@Injectable()
export class FindingsService {
  constructor(
    @InjectModel('GroupedFinding')
    private readonly groupedFindingModel: Model<IGroupedFinding>,

    @InjectModel('RawFinding')
    private readonly rawFindingModel: Model<IRawFinding>,
  ) {}

  /**
   * Retrieves an array of grouped findings from the database.
   * @returns {Promise<IGroupedFinding[]>} A promise that resolves to an array of grouped findings.
   */
  getGroupedFindings(): Promise<IGroupedFinding[]> {
    return this.groupedFindingModel.find()
  }

  /**
   * Retrieves an array of raw findings from the database.
   * If a grouped finding ID is provided, it fetches raw findings associated with that group.
   * If no grouped finding ID is provided, it fetches all raw findings.
   * @param {number} grouped_finding_id (Optional) The ID of the grouped finding to filter raw findings.
   * @returns {Promise<IRawFinding[]>} A promise that resolves to an array of raw findings.
   */
  getRawFindings(grouped_finding_id?: number): Promise<IRawFinding[]> {
    return grouped_finding_id
      ? this.rawFindingModel.find({ grouped_finding_id })
      : this.rawFindingModel.find()
  }

  countRawFindings(): Promise<IRawFindingCount[]> {
    return this.rawFindingModel.aggregate([
      {
        $group: {
          _id: '$grouped_finding_id',
          count: { $sum: 1 },
        },
      },
      {
        $sort: {
          _id: 1,
        },
      },
    ])
  }
}
