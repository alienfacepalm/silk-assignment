import { Document } from 'mongoose'

export interface IGroupedFinding extends Document {
  id: number
  grouping_type: string
  grouping_key: string
  severity: string
  grouped_finding_created: Date
  sla: Date
  description: string
  security_analyst: string
  owner: string
  workflow: string
  status: string
  progress: number
}
