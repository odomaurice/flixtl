import PageIntro from "@/components/PageIntro";
import RootLayout from "@/components/RootLayout";

export const metadata = {
  title: 'Apex | blog'
    
   
};


const BlogPage = () => {
  return (
    <>
    <RootLayout>
    
      <PageIntro eyebrow="Blog" title="The latest articles and news">
        <p>
          Stay up-to-date with the latest industry news as I
          find new ways to re-purpose old CSS tricks articles.
        </p>
      </PageIntro>
      </RootLayout>
      
    </>
  );
};

export default BlogPage;
