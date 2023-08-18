import { IFinding } from '../view/dashboard/types'

// const API = `${process.env.NX_API_PROTOCOL}://${process.env.NX_API_HOST}:${process.env.NX_API_PORT}/api`
// TODO: make dotenv work
const API = `http://localhost:7455/api`

export const getAllFindings = (): Promise<IFinding[]> =>
  fetch(`${API}/findings/all`).then((res: Response) => res.json())
