import React from 'react'
import Image from 'next/image';

function ContentTitle(data) {

let color;

let imagePath;
console.log(data.type)


switch (data.type) {
    case 'プログラミング':
        imagePath="/プログラミング.png"
      color = 'bg-yellow-300 text-white';
      break;
    case 'セキュリティ':
        imagePath = "/セキュリティ.png"
      color = 'bg-blue-500 text-white';
      break;
    case '機械学習':
        imagePath = "/機械学習.png"
      color = 'bg-green-500 text-white';
      break;
    case "読書メモ":
        imagePath = "/読書メモ.png"
      color='bg-orange-500 text-white'
      break;
    case "ツール":
        imagePath = "/ツール.png"
      color = 'bg-teal-500 text-white'
      break;
    case "アルゴリズム":
        imagePath = "/アルゴリズム.png"
      color ="bg-fuchsia-400 text-white";
      break;
    case "工作":
        imagePath = "/工作.png"
      color = "bg-red-300 text-white"
      break;

    default:
        imagePath = "/そのほか.png"
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