import { useEffect, useState } from "react"
import { Repo } from "../api/metadata/index.ts"

export default function useMetadata(): [Repo[], boolean] {
  const [repo, setRepo] = useState([])
  const [isSyncing, setIsSyncing] = useState(true)

  useEffect(() => {
    fetch("/api/metadata")
      .then((resp) => resp.json().catch(() => ({})))
      .then(({ repo }) => {
        setRepo(repo)
      })
      .catch((e) => console.error(e))
      .finally(() => {
        setIsSyncing(false)
      })
  }, [])

  return [repo, isSyncing]
}
