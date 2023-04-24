
import Image from "next/image";
import Head from "next/head";
import Layout from "../components/Layout/Layout";

import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
    
  </Layout>
);

export default MyApp;
