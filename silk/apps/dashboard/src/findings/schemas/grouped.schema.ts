import { Schema, Document } from 'mongoose';

interface GroupedFinding extends Document {
  id: number;
  grouping_type: string;
  grouping_key: string;
  severity: string;
  grouped_finding_created: Date;
  sla: Date;
  description: string;
  security_analyst: string;
  owner: string;
  workflow: string;
  status: string;
  progress: number;
}

export const GroupedFindingsSchema = new Schema<GroupedFinding>({
  id: { type: Number, required: true },
  grouping_type: { type: String, required: true },
  grouping_key: { type: String, required: true },
  severity: { type: String, required: true },
  grouped_finding_created: { type: Date, required: true },
  sla: { type: Date, required: true },
  description: { type: String, required: true },
  security_analyst: { type: String, required: true },
  owner: { type: String, required: true },
  workflow: { type: String, default: 'Default Workflow', required: true },
  status: { type: String, required: true },
  progress: { type: Number, required: true },
});
