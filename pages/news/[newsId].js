import { useRouter } from 'next/router'
import React from 'react'

function DetailPage() {
  const router = useRouter()

  const newsId = router.query.newsId

  console.log(newsId)

  //fetch news with match api
  
  return (
    <h1>DetailPage</h1>
  )
}

export default DetailPage