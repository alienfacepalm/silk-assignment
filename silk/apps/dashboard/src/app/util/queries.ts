import { IGroupedFinding, IRawFinding } from '../view/dashboard/types'

// const API = `${process.env.NX_API_PROTOCOL}://${process.env.NX_API_HOST}:${process.env.NX_API_PORT}/api`
// TODO: make dotenv work
const API = `http://localhost:7455/api`

export const getGroupedFindings = (): Promise<IGroupedFinding[]> =>
  fetch(`${API}/findings/grouped`).then((res: Response) => res.json())

export const getRawFindings = (): Promise<IRawFinding[]> =>
  fetch(`${API}/findings/raw`).then((res: Response) => res.json())

export const getRawFindingsById = (id: number): Promise<IRawFinding[]> =>
  fetch(`${API}/findings/raw/${id}`).then((res: Response) => res.json())

export const getRawFindingsCounts = (): Promise<any> =>
  fetch(`${API}/findings/raw/count`).then((res: Response) => res.json())
