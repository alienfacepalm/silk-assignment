import { model } from 'mongoose';
import { GroupedFindingSchema } from '../schemas/grouped.schema';
import { GroupedFinding } from '../schemas/grouped.interface';

export const GroupedFindingModel = model<GroupedFinding>(
  'GroupedFinding',
  GroupedFindingSchema,
);
