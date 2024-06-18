import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  const newsItemSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsItemSlug);

  if (!newsItem) notFound();

  return (
    <>
      <div className="modal-backdrop">
        <h1>INTERCEPTED</h1>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <h1>INTERCEPTED</h1>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </div>
    </>
  )
}