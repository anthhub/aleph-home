import type { APIRequest } from "aleph/types.ts"

export default async function handler(req: APIRequest) {
  const decoder = new TextDecoder("utf-8")
  const repo = await Deno.readFile(Deno.cwd() + "/public/repo.json")
  return req.json({ repo: JSON.parse(decoder.decode(repo)) })
}

export interface Repo {
  name: string
  url: string
}
