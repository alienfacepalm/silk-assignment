import { Schema, Document } from 'mongoose';

interface RawFinding extends Document {
  id: number;
  source_security_tool_name: string;
  source_security_tool_id: string;
  source_collaboration_tool_name: string;
  source_collaboration_tool_id: string;
  severity: string;
  finding_created: Date;
  ticket_created: Date;
  description: string;
  asset: string;
  status: string;
  remediation_url: string;
  remediation_text: string;
  grouped_finding_id: number;
}

export const RawFindingsSchema = new Schema<RawFinding>({
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
