import { Document } from 'mongoose';

export interface IRawFinding extends Document {
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
