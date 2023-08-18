import { IGroupedFinding } from './grouped.interface'
import { IRawFinding } from './raw.interface'

export interface IFinding extends IGroupedFinding {
  subRows: IRawFinding[]
}
