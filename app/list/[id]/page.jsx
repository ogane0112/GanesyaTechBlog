import Image from 'next/image';
import { getFilterPosts,getOtherPosts } from '@/lib/notion/notion.ts'
import Link from 'next/link';
import Profile from "@/app/components/Profile"
import ContentTitle from "@/app/components/ContentTitle"
//一時間ごとにキャッシュをリセットして更新(ISR)
export const revalidate = 3600;

export default async function Home({params}) {
  const decodedString = decodeURIComponent(params.id);
  let postsProperties
  if (decodedString=="その他"){
     postsProperties = await getOtherPosts()
  }else{
     postsProperties = await getFilterPosts(decodedString)
  }
  
  console.log(postsProperties)
  return (
    <div className='container mx-auto'>
    <main className="flex flex-col lg:flex-row min-h-screen p-8 lg:space-x-8">

      <div className="grid gap-8 lg:w-3/4">
        <ContentTitle type ={decodedString} />
        {postsProperties.map((post, index) => (
          <Link href={`/blog/${post.uuid}`} key={index} className="bg-white border rounded-lg p-10 shadow-lg transition-shadow hover:shadow-xl">
            {console.log(post.types.multi_select[0].name)}
            <div className="mb-4">
              {post.files.map((file, fileIndex) => (
                <Image key={fileIndex} src={file} alt="Post image" width={960} height={540} className="w-full mb-2" priority={false} />
              ))}
            </div>
            <h2 className="text-sm sm:text-md md:text-lg font-semibold mb-2">{post.title}</h2>
            <p className="mb-2 text-gray-600">{post.modifiedData}</p>
            <div className="flex flex-wrap gap-2">
              {post.types.multi_select.map((type, typeIndex) => {
                let color;
                switch (type.name) {
                  case 'プログラミング':
                      color = 'bg-yellow-300 text-white';
                      break;
                    case 'セキュリティ':
                      color = 'bg-blue-500 text-white';
                      break;
                    case '機械学習':
                      color = 'bg-green-500 text-white';
                      break;
                    case "読書メモ":
                      color='bg-orange-500 text-white'
                      break;
                    case "ツール":
                      color = 'bg-teal-500 text-white'
                      break;
                    case "アルゴリズム":
                      color ="bg-fuchsia-400 text-white";
                      break;
                    case "工作":
                      color = "bg-red-300 text-white"
                      break;
  
                    default:
                      color = 'bg-slate-500 text-white';
                }
                return (
                  <span key={`type${typeIndex}`} className={`px-2 py-1 rounded-md ${color} font-semibold`}>
                    {type.name}
                  </span>
                );
              })}
            </div>
          </Link>
        ))}
      </div>
      <div className="lg:w-1/4 lg:ml-auto lg:sticky lg:top-0 lg:h-screen lg:overflow-auto">
        <Profile />
      </div>
    </main>
  </div>
  )
}
