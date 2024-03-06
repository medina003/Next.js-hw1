import { Roboto } from "next/font/google";
import Head from "next/head";
const inter = Roboto({
  subsets: ["cyrillic"],
  weight: "500",
});

const AccountPage = () => {
  return (
    <>
      <Head>
        <title>Account Page</title>
        <meta name="description" content="Описание аккаунта" />
      </Head>
      <div className={`${inter.className}`}>Account page </div>
    </>
  );
};

export default AccountPage;
