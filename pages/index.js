import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import BlogHeader from "../Components/BlogHeader";
import { getAllBlogPosts } from "../Lib/Data";

export const getStaticProps = () => {
  const allBlogs = getAllBlogPosts();
  return {
    props: {
      blogs: allBlogs,
    },
  };
};

export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <title>Bits-0f-C0de</title>

        <meta itemProp="name" content="Bits-0f-C0de🚀" />
        <meta
          itemProp="description"
          content="Writing your own blogs made easier for everyone!"
        />
        <meta
          itemProp="image"
          content="https://avatars.githubusercontent.com/u/76097144?v=4"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blogs.realzaidmukaddam.tech/" />
        <meta property="og:title" content="Bits-0f-C0de🚀" />
        <meta
          property="og:description"
          content="Writing your own blogs made easier for everyone!"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/76097144?v=4"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bits-0f-C0de🚀" />
        <meta
          name="twitter:description"
          content="Writing your own blogs made easier for everyone!"
        />
        <meta
          name="twitter:image"
          content="https://avatars.githubusercontent.com/u/76097144?v=4"
        />
      </Head>

      <div className="min-h-screen relative bg-white dark:bg-gray-900">
        <Navbar />
        <Header />

        <div className="px-0.5 md:px-7 pb-14 pt-6 mx-auto">
          <div className="flex flex-wrap">
            {blogs &&
              blogs.map((blog) => (
                <BlogHeader
                  key={blog.data.Id}
                  data={blog.data}
                  content={blog.content}
                  readTime={blog.readTime.text}
                />
              ))}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
