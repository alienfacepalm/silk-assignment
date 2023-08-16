// Import required modules and dependencies
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

// Import interfaces for schema typings
import { IGroupedFinding } from './schemas/grouped.interface'
import { IRawFinding, IRawFindingCount } from './schemas/raw.interface'

// Define an injectable service class for handling findings-related operations
@Injectable()
export class FindingsService {
  constructor(
    @InjectModel('GroupedFinding')
    private readonly groupedFindingModel: Model<IGroupedFinding>,

    @InjectModel('RawFinding')
    private readonly rawFindingModel: Model<IRawFinding>,
  ) {}

  /**
   * Retrieve all grouped findings from the database.
   * @returns {Promise<IGroupedFinding[]>} A promise that resolves to an array of grouped findings.
   */
  async getGroupedFindings(): Promise<IGroupedFinding[]> {
    return this.groupedFindingModel.find()
  }

  /**
   * Retrieve raw findings from the database, optionally filtered by grouped_finding_id.
   * @param {number} grouped_finding_id - Optional. The ID of the grouped finding to filter raw findings.
   * @returns {Promise<IRawFinding[]>} A promise that resolves to an array of raw findings.
   */
  async getRawFindings(grouped_finding_id?: number): Promise<IRawFinding[]> {
    if (grouped_finding_id) {
      // If grouped_finding_id is provided, retrieve raw findings associated with it
      return this.rawFindingModel.find({ grouped_finding_id })
    } else {
      // If no specific grouped_finding_id is provided, retrieve all raw findings
      return this.rawFindingModel.find()
    }
  }

  /**
   * Count the number of raw findings per grouped_finding_id using aggregation.
   * @returns {Promise<IRawFindingCount[]>} A promise that resolves to an array of objects containing grouped_finding_id and count.
   */
  async countRawFindings(): Promise<IRawFindingCount[]> {
    return this.rawFindingModel.aggregate([
      {
        $group: {
          _id: '$grouped_finding_id', // Group by grouped_finding_id field
          count: { $sum: 1 }, // Count occurrences within each group
        },
      },
      {
        $sort: {
          _id: 1, // Sort the results based on grouped_finding_id
        },
      },
    ])
  }
}
