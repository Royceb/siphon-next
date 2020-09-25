import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import "../css/style.scss";
import AOS from "aos";

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Next.js + MongoDB App</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
