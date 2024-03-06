import { Roboto } from "next/font/google";
import Head from "next/head";
const inter = Roboto({
  subsets: ["cyrillic"],
  weight: "500",
});

const ContactsPage = () => {
  return (
    <>
      <Head>
        <title>Contacts Page</title>
        <meta name="description" content="Контактная информация" />
      </Head>
      <div className={`${inter.className}`}>Contacts page</div>
    </>
  );
};

export default ContactsPage;
