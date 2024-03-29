import { getPageContent, getPageInfo, getAllPosts, getItem} from "@/lib/notion/notion"

const domain = "https://ganesyatech.com/"

export default async function sitemap() {

    //domain変更の時は,ここを変更するのみで良き！
    

    const staticPath =  [

      {
        url: `${domain}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },

      {
        url: `${domain}/list/機械学習`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },

      {
        url: `${domain}/list/読書メモ`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },

      {
        url: `${domain}/list/ツール`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },

      {
        url: `${domain}/list/アルゴリズム`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },

      {
        url: `${domain}/list/セキュリティ`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },

      {
        url: `${domain}/list/工作`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      
      {
        url: `${domain}/list/プログラミング`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${domain}/list/その他`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },

    ]
    const allData = await getAllPosts();
  
    const dynamicPaths = allData.map((data) => {
    return {
      url: `${domain}/blog/${data.uuid}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      
    }

    
  });
  
  return [ ...dynamicPaths,...staticPath]

  }




  



