"use client"

import Profile from "./Profile";
import { useState } from 'react';
import NoResult from "./NoResult"
import BlogList from "./BlogList"

//fileterを行う()
const filterPosts = (posts, query) => {
    console.log(`posts:${posts}`)
  
  //queryがないときの処理
  if (!query) {
    return posts;
  }

  //javaScriptで正規表現で検索(大文字小文字区別なし)
  let regex
  try{
    if(query.includes("\\")){

        query = "aaaaaaaaaaa"
        
    }
    regex = new RegExp(query, 'i');
    console.log(regex)
  } catch(error){

    console.log(error)

  }
  
  return posts.filter((post) => regex.test(post.title));
};


//本体
export default function Home(data) {
  const posts = data.posts;

  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = filterPosts(posts, searchQuery);
  
  
  return (
    <div className='container mx-auto'>
      

      <main className="flex flex-col lg:flex-row min-h-screen p-8 lg:space-x-8">
       
        <div className="grid gap-8 lg:w-3/4">

        <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="border border-gray-300 rounded-md p-2 mb-4  h-10"
        />

        {filteredPosts.length > 0 ? (<BlogList post = {filteredPosts} />):(<NoResult />)}

        </div>
        <div className="lg:w-1/4 lg:ml-auto lg:sticky lg:top-0 lg:h-screen lg:overflow-auto">
          <Profile />
        </div>
      </main>
    </div>
  )
}