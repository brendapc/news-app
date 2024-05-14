import Link from "next/link";
import MainHeader from "../components/main-header/main-header";

export default function NewsPage() {
  return (
    <div>
      <MainHeader />
      <h1>News List</h1>
      <ul>
        <li><Link href={"/news/1"}>News 1</Link></li>
        <li><Link href={"/news/2"}>News 2</Link></li>
        <li><Link href={"/news/3"}>News 3</Link></li>
      </ul>
    </div>
  );
}