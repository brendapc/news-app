import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

 export default function FilteresNewsPage({params}) {
   const newsYear = params.year; 
   const news = getNewsForYear(newsYear);
  
  return <NewsList news={news} />
 }