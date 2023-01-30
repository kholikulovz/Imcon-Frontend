import Head from "next/head";
import Industries from "../src/Components/industries/industries";

// import Components
import Layout from "../src/Components/layout/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Imcon Ltd.</title>
        <meta name="description" content="Imcon Company" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Layout >
        <Industries/>
      </Layout>
    </>

  );
}
