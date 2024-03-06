import { Roboto } from "next/font/google";
import Head from "next/head";
const inter = Roboto({
  subsets: ["cyrillic"],
  weight: "500",
});

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="Описание блога" />
      </Head>
      <div className={`${inter.className}`}>Blog page </div>
    </>
  );
};

export default BlogPage;
