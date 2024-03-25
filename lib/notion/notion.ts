import { NotionToMarkdown } from "notion-to-md";
const { Client } = require("@notionhq/client");


const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});


const n2m = new NotionToMarkdown({ notionClient: notion });

export async function getPageContent(pageId: any) {
  const mdblocks = await n2m.pageToMarkdown(pageId, 1);
  console.log("Markdown Content:", mdblocks);

  return mdblocks;
}

interface NotionPost {
    uuid:string;
    id: string;
    title:  string;
    date: string;
    types: string[];
    files: string[];
    author: string;
    open:boolean;
  };
  
  export async function getAllPosts(): Promise<NotionPost[]> {
    const response = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
      filter:{
        property: 'checked',
        checkbox: {
        equals: true,

      }},
      sorts: [
        { //createdateカラムの値で降順に並べる
          property: 'ID',
          direction: 'descending',
        },
      ]
    })
    const posts = response.results
    console.log(posts)

    const postsProperties = posts.map((post:any) => {
        
      // レコードidの取り出し
      const uuid = post.id

      const id = post.properties.ID. unique_id.number
  
      // titleプロパティの取り出し
      const title = post.properties.title.title[0]?.plain_text;
  
      // dateプロパティの取り出し
      const date = post.properties.timestamp.created_time;
      const modifiedData = date.split('T')[0];
  
      // multi_selectプロパティの取り出し（例：types）
      const types = post.properties.type;
  
      // filesプロパティの取り出し（例：file）
      const files = post.properties.file.files.map((file:any) => file.file.url);
  
      // peopleプロパティの取り出し（例：author）
      const author = post.properties.author.name;
  
      // プロパティをまとめたオブジェクトを返す
      return { uuid,id, title, modifiedData, types, files, author };
    });
    return postsProperties
  }

  interface NotionPostInfo {
    title:  string;
    date: string;
    author: string
  };
  
  export async function getPageInfo(pageId: string): Promise<NotionPostInfo> {
    const response = await notion.pages.retrieve({ page_id: pageId });
    const pageInfo = response.properties
    console.log(pageInfo)
    
    const title = pageInfo.title.title[0]?.plain_text
    const date = pageInfo.timestamp.created_time;
    const author = pageInfo.author.select.name;
    return { title, date, author }
  }


  
  //fileterする関数！
  export async function getFilterPosts(filterData:any): Promise<any>  {
    const response = await notion.databases.query({
      database_id: process.env.DATABASE_ID,
      filter: {
        and: [
          {
            property: 'checked',
            checkbox: {
              equals: true,
            }
          },
          {
            property: 'tags',
            multi_select: {
              contains: filterData
            }
          }
        ]
      },
      sorts: [
        {
          property: 'ID',
          direction: 'descending',
        },
      ]
    })
  }

    //アルゴリズムのタグでfileterを書ける関数
    export async function getAlgoPosts(): Promise<any>  {
      const response = await notion.databases.query({
        database_id: process.env.DATABASE_ID,
        filter: {
          and: [
            {
              property: 'checked',
              checkbox: {
                equals: true,
              }
            },
            {
              property: 'tags',
              multi_select: {
                contains: '機械学習'
              }
            }
          ]
        },
        sorts: [
          {
            property: 'ID',
            direction: 'descending',
          },
        ]
      })
    }

        //のタグでfileterを書ける関数
        export async function getToolPosts(): Promise<any>  {
          const response = await notion.databases.query({
            database_id: process.env.DATABASE_ID,
            filter: {
              and: [
                {
                  property: 'checked',
                  checkbox: {
                    equals: true,
                  }
                },
                {
                  property: 'tags',
                  multi_select: {
                    contains: '機械学習'
                  }
                }
              ]
            },
            sorts: [
              {
                property: 'ID',
                direction: 'descending',
              },
            ]
          })
        }


        //工作でfilterする！
        export async function getMakePosts(): Promise<any>  {
          const response = await notion.databases.query({
            database_id: process.env.DATABASE_ID,
            filter: {
              and: [
                {
                  property: 'checked',
                  checkbox: {
                    equals: true,
                  }
                },
                {
                  property: 'tags',
                  multi_select: {
                    contains: '機械学習'
                  }
                }
              ]
            },
            sorts: [
              {
                property: 'ID',
                direction: 'descending',
              },
            ]
          })
        }

         //プログラミングでfilterする！
         export async function getProgramPosts(): Promise<any>  {
          const response = await notion.databases.query({
            database_id: process.env.DATABASE_ID,
            filter: {
              and: [
                {
                  property: 'checked',
                  checkbox: {
                    equals: true,
                  }
                },
                {
                  property: 'tags',
                  multi_select: {
                    contains: '機械学習'
                  }
                }
              ]
            },
            sorts: [
              {
                property: 'ID',
                direction: 'descending',
              },
            ]
          })
        }