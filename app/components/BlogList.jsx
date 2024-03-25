import Image from 'next/image';
import { getAllPosts } from '../../lib/notion/notion'
import Link from 'next/link';
import Profile from "./Profile"

//一時間ごとにキャッシュをリセットして更新(ISR)
export const revalidate = 3600;

export default async function Home() {
  const postsProperties = await getAllPosts()
  console.log(postsProperties)
  return (
    <div className='container mx-auto'>
      <main className="flex flex-col lg:flex-row min-h-screen p-8 lg:space-x-8">

        <div className="grid gap-8 lg:w-3/4">
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
                  let colorClass;
                  switch (type.name) {
                    case 'プログラミング':
                      colorClass = 'bg-yellow-500 text-white';
                      break;
                    case '情報セキュリティ':
                      colorClass = 'bg-blue-500 text-white';
                      break;
                    case '機械学習':
                      colorClass = 'bg-green-500 text-white';
                      break;
                    case "読書メモ":
                      colorClass = 'bg-orange-500 text-white'
                      break;
                    default:
                      colorClass = 'bg-gray-500 text-white';
                  }
                  return (
                    <span key={`type${typeIndex}`} className={`px-2 py-1 rounded-md ${colorClass} font-semibold`}>
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