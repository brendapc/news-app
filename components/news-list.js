import Link from "next/link";

export default async function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.length > 0 && news.map((newsItem) => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.slug} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}