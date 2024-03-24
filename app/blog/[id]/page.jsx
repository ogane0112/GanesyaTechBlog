import { getPageContent, getPageInfo ,getAllPosts} from "@/lib/notion/notion"
import ReactMarkdown from 'react-markdown';
import CodeBlock from '@/app/components/CodeBlock';
import "@/app/blog/style.css"

//コードの```を消すための関数
const removeCodeFences = (content) => {
  return content.replace(/```(\w*)\n/g, '').replace(/\n```/g, '');
};

//なんのプログラム言語か取得する関数
const getLanguage = (content) => {
  const regex = /```(\w*)/; // ```の後の単語を取得する正規表現
  const match = content.parent.match(regex);
  return match ? match[1] : null; // match[1]が言語指定
};



export default async function Page({params}) {

  //なんもしなくてもSSGになるのでなんもしなくてよき
  const pageContents = await getPageContent(params.id)
  const pageInfo = await getPageInfo(params.id)


  return (
    <>
      <div className="container mx-auto  lg:px-20 bg-white ">
        <div className=" text-3xl font-semibold text-center p-5 lg:px-20">
          <p>{pageInfo.title}</p>
        </div>

        <div className="text-right px-5 lg:px-20 text-gray-500">
          <p>{pageInfo.author}</p>
        </div>
        <div className="py-10 px-5  lg:p-10 lg:px-20">
          {pageContents.map((content, index) => {
            
            const formattedMarkdown = content.parent.replace(/\n/g, '  \n');
            if (content.type === 'code') {
              const codeContent = removeCodeFences(content.parent);
              const language = getLanguage(content);
              console.log(language)
              return (
                <div className="pt-3 text-sm sm:text-base md:text-lg lg:text-base  xl:text-base " key={index}>
                  
                  <CodeBlock language={language} value={codeContent} />

                </div>
              );
            }
            return (
              <div className="pt-3 list-decimal" key={index}>
                <ReactMarkdown
                  components={{
                    ol: ({ node, ...props }) => <ol className="list-decimal list-inside pb-2" {...props} />,
                    li: ({ node, ...props }) => <li {...props} />
                  }}
                >
                  {formattedMarkdown}
                </ReactMarkdown>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )

}