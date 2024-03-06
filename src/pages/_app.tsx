import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav style={{ marginBottom: 20 }}>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            width: 500,
            listStyle: "none",
          }}
        >
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contacts">Contacts</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/account">Account</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
