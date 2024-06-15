import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default function FilteresNewsPage({ params }) {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  let news

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
  }

  // if there is no nested route after /archive/[year]
  let newsContent = <p>No news found for this selected period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  const links = getAvailableNewsYears();

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>))
            }
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}