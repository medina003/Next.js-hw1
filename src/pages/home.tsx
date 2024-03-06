import { Roboto } from "next/font/google";
import Head from "next/head";
const inter = Roboto({
  subsets: ["cyrillic"],
  weight: "500",
});

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Описание домашней страницы" />
      </Head>
      <div className={`${inter.className}`}>Home page</div>
    </>
  );
};

export default HomePage;
