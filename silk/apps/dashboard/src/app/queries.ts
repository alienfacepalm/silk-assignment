import { IGroupedFinding, IRawFinding } from './view/dashboard/types'

// TODO: make .env work

// const API = `${process.env.NX_API_PROTOCOL}://${process.env.NX_API_HOST}:${process.env.NX_API_PORT}/api`
const API = `http://localhost:7455/api`

export function getGroupedFindings(): Promise<IGroupedFinding[]> {
  return fetch(`${API}/findings/grouped`).then((res: Response) => res.json())
}

export function getRawFindingsById(id: number): Promise<IRawFinding[]> {
  console.log({ id })
  return fetch(`${API}/findings/raw/${id}`).then((res: Response) => res.json())
}
