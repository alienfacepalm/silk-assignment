// TODO: make .env work
// const API = `${process.env.NX_API_PROTOCOL}://${process.env.NX_API_HOST}:${process.env.NX_API_PORT}/api`
const API = `http://localhost:7455/api`

export function getGroupedFindings() {
  return fetch(`${API}/findings/grouped`).then((res: Response) => res.json())
}
