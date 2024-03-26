import React from 'react'
import { getRecentPosts } from "@/lib/notion/notion"
import Link from 'next/link';

async function Recent() {
  const recentPosts = await getRecentPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">最近の投稿</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recentPosts.map((post, index) => (
          <Link
            href ={`/blog/${post.uuid}`}
            key={index}
            className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.modifiedData}</p>
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
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Recent