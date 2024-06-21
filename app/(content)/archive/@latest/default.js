import NewsList from "@/components/news-list"
import { getLatestNews } from "@/lib/news"

/* all paralels route should support the same nested routes, but for latest page it does not makes sense to support a [year] nested route, do it need a `default` (name reserved) to have where to land */
export default async function LatestNewsPage() {
  const latestNews = await getLatestNews()

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  )
}