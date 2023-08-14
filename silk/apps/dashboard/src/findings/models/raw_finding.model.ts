import { model } from 'mongoose';
import { RawFindingSchema } from '../schemas/raw.schema';
import { RawFinding } from '../schemas/raw.interface';

export const RawFindingModel = model<RawFinding>(
  'RawFinding',
  RawFindingSchema,
);
