import { Schema } from 'mongoose';

import { IRawFinding } from './raw.interface';

export const RawFindingSchema = new Schema<IRawFinding>({
  id: { type: Number, required: true },
  source_security_tool_name: { type: String, required: true },
  source_security_tool_id: { type: String, required: true },
  source_collaboration_tool_name: { type: String, required: true },
  source_collaboration_tool_id: { type: String, required: true },
  severity: { type: String, required: true },
  finding_created: { type: Date, required: true },
  ticket_created: { type: Date, required: true },
  description: { type: String, required: true },
  asset: { type: String, required: true },
  status: { type: String, required: true },
  remediation_url: { type: String, required: true },
  remediation_text: { type: String, required: true },
  grouped_finding_id: { type: Number, required: true },
});
