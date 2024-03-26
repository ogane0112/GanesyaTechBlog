import BlogList from "@/app/components/BlogList.jsx"
import Search from "@/app/components/Search.jsx"
import { getAllPosts } from '@/lib/notion/notion';

//下のコードのコメントアウトを解除することでISRとして実装する事ができる！
//現在は開発中であり本番環境もクローニングされていないのでとりあえずビルドしまくる事で対応！
// export const revalidate = 10*3600

export default async function Home() {
  const allData = await getAllPosts()
  return (
    <>  
      <Search posts =  {allData}/>
    </>
  );
}
