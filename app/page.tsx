import BlogList from "@/app/components/BlogList.jsx"

export const revalidate = 10

export default function Home() {
  
  return (
    <>  
      <BlogList />
    </>
  );
}
