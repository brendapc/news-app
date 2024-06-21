import NewsList from "@/components/news-list";
import { getAvailableNewsMonths, getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default async function FilteresNewsPage({ params }) {
  const selectedYear = params.filter?.[0];
  const selectedMonth = params.filter?.[1];

  let news = undefined;
  // if there is no nested route after /archive/[year]
  let newsContent = <p>No news found for this selected period.</p>

  if (selectedYear && !selectedMonth) {
    news = await getNewsForYear(selectedYear)
    if (news && news.length > 0) {
      newsContent = <NewsList news={news} />
    }

  }

  const links = await getAvailableNewsYears();
  const months = await getAvailableNewsMonths(selectedMonth)

  if (selectedYear && !links.includes(+selectedYear) || selectedMonth && !months.includes(+selectedMonth)) {
    throw new Error("Invalid filter")
  }

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