import Head from "next/head";
import { Roboto } from "next/font/google";
const inter = Roboto({
  subsets: ["cyrillic"],
  weight: "500",
});

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About us" />
      </Head>
      <div className={`${inter.className}`}>About us</div>
    </>
  );
};

export default AboutPage;
