import React from 'react'
import Image from 'next/image';

function ContentTitle(data) {

let color;

let imagePath;
console.log(data.type)


switch (data.type) {
    case 'プログラミング':
        imagePath="/program.png"
      color = 'bg-yellow-300 text-white';
      break;
    case 'セキュリティ':
        imagePath = "/security.png"
      color = 'bg-blue-500 text-white';
      break;
    case '機械学習':
        imagePath = "/machine.png"
      color = 'bg-green-500 text-white';
      break;
    case "読書メモ":
        imagePath = "/memo.png"
      color='bg-orange-500 text-white'
      break;
    case "ツール":
        imagePath = "/tool.png"
      color = 'bg-teal-500 text-white'
      break;
    case "アルゴリズム":
        imagePath = "/algo.png"
      color ="bg-fuchsia-400 text-white";
      break;
    case "工作":
        imagePath = "/make.png"
      color = "bg-red-300 text-white"
      break;

    default:
        imagePath = "/other.png"
      color = 'bg-slate-500 text-white';
  }

  return (
    <div className="grid gap-8 ">
    
      <div  className="bg-white border rounded-lg p-10 shadow-lg transition-shadow hover:shadow-xl">
        <div className="mb-4">
          
            <Image key={imagePath}  src={imagePath} alt="Post image" width={960} height={540} className="w-full mb-2" priority={false} />
          
        </div>
        
        <div className="flex flex-wrap gap-2  items-center justify-center">       
              <span key={imagePath} className={`px-2 py-1 rounded-md ${color} font-semibold`}>

                {data.type}
              
              </span>   
        </div>
        <h2 className="text-sm sm:text-md md:text-lg font-semibold mb-2 text-center">{data.type}についての記事一覧です！</h2>
      </div>
  </div>
  )
}

export default ContentTitle;