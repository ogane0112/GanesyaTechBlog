export default function sitemap() {

    //domain変更の時は,ここを変更するのみで良き！
    const domain = "https://ganesya-tech-blog.vercel.app/"
    
    return [
      {
        url: `${domain}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${domain}/blog`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${domain}/list`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.5,
      },
    ]
  }