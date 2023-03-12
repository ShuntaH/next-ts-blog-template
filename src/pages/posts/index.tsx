import { GetStaticPropsResult } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";


export function getStaticProps(): GetStaticPropsResult<undefined> {
  return {
    redirect: {
      destination: '/pages/1',
      statusCode: 308
    }
  }
}

export default function PaginatedPage() {
  const router = useRouter()
  useEffect(() => {
    (async () => {
      await router.replace('/pages/1')
    })()

  }, [])
}
