interface IGroupedFinding {
  _id: string
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

interface IRawFinding {
  _id: string
  id: number
  source_security_tool_name: string
  source_security_tool_id: string
  source_collaboration_tool_name: string
  source_collaboration_tool_id: string
  severity: string
  finding_created: Date
  ticket_created: Date
  description: string
  asset: string
  status: string
  remediation_url: string
  remediation_text: string
  grouped_finding_id: number
}

export interface IFinding extends IGroupedFinding {
  rawFindings?: IRawFinding[]
}
