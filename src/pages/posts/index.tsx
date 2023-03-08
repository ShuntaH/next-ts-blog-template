import { useEffect } from "react";
import { useRouter } from "next/router";


export default function PaginatedPage() {
  const router = useRouter()
  useEffect(() => {
    (async () => {
      await router.replace('/pages/1')
    })()

  }, [])
}
