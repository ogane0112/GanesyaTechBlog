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


  //最新の3つの記事を取得するコード！！！
  export async function getRecentPosts(): Promise<any>  {
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
          ]
        },
        sorts: [
          {
            property: 'ID',
            direction: 'descending',
          },
        ]
      })
      const posts = response.results
       // 直近の3つの記事のみを取得
      const recentPosts = posts.slice(0, 3);
      console.log(posts)
  
      const postsProperties = recentPosts.map((post:any) => {
          
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
            property: "type",
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

    //その他のやつを実装するための関数
    export async function getOtherPosts(): Promise<any>  {
      const responseOthre = await notion.databases.query({
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
              property: 'type',
              multi_select: {

                does_not_contain:'機械学習',
                
              }
            },
            {
              property: 'type',
              multi_select: {

                does_not_contain:'プログラミング',
                
              }
            },
            {
              property: 'type',
              multi_select: {

                does_not_contain:'読書メモ',
                
              }
            },
            {
              property: 'type',
              multi_select: {

                does_not_contain:'ツール',
                
              }
            },
            {
              property: 'type',
              multi_select: {

                does_not_contain:'アルゴリズム',
                
              }
            },
            {
              property: 'type',
              multi_select: {

                does_not_contain:'セキュリティ',
                
              }
            },
            {
              property: 'type',
              multi_select: {

                does_not_contain:'工作',
                
              }
            },
          ]
        },
        sorts: [
          {
            property: 'ID',
            direction: 'descending',
          },
        ]
      })
      const posts = responseOthre.results
  
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

       