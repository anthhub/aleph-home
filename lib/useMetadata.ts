import { useEffect, useState } from "react"
import { Repo } from "../api/metadata/index.ts"

export default function useMetadata() {
  const [repo, setRepo] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/metadata")
      .then((resp) => resp.json().catch(() => ({})))
      .then(({ repo }) => {
        setRepo(repo)
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return {repo, loading}
}
