import { getPageContent, getPageInfo, getAllPosts } from "@/lib/notion/notion"
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/app/components/CodeBlock';
import "@/app/blog/style.css"
import Profile from "@/app/components/Profile"
import Breadcrumbs  from "@/app/components/BreadCrumbs"
import Recent from "@/app/components/Recent"

// コードの```を消すための関数
const removeCodeFences = (content) => {
  return content.replace(/```(\w*)\n/g, '').replace(/\n```/g, '');
};

// なんのプログラム言語か取得する関数
const getLanguage = (content) => {
  const regex = /```(\w*)/; // ```の後の単語を取得する正規表現
  const match = content.parent.match(regex);
  return match ? match[1] : null; // match[1]が言語指定
};

// カスタムコンポーネントを定義
const MarkdownContent = ({ content }) => (
  <div className="markdown-content">
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
);

export default async function Page({ params }) {

  
  const pageContents = await getPageContent(params.id)
  const pageInfo = await getPageInfo(params.id)

  return (
    <>
      <div className="container mx-auto lg:flex lg:flex-row lg:space-x-8">
        <div className="lg:w-3/4 px-5 bg-white">
        <Breadcrumbs />
          <div className=" text-2xl font-semibold text-center ">
            <p className=" my-5">{pageInfo.title}</p>
          </div>
          <div className="text-right px-5 text-gray-500">
            <p>{pageInfo.author}</p>
          </div>
          <div className="py-10 px-5">
            {pageContents.map((content, index) => {
              const formattedMarkdown = content.parent.replace(/\n/g, ' \n');
              if (content.type === 'code') {
                const codeContent = removeCodeFences(content.parent);
                const language = getLanguage(content);
                console.log(language)
                return (
                  <div className="pt-3 text-sm sm:text-base md:text-lg lg:text-base xl:text-base " key={index}>
                    <CodeBlock language={language} value={codeContent} />
                  </div>
                );
              }
              return (
                <MarkdownContent key={index} content={formattedMarkdown} />
              )
            })}
          </div>
          <Recent />
        </div>
        <div className="lg:w-1/4 lg:ml-auto lg:sticky lg:top-0 lg:h-screen lg:overflow-auto">
          <Profile />
        </div>
      </div>
     
    </>
  )
}