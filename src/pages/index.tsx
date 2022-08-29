import Head from "next/head";
import HomePage from "../App/Pages/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio | Vinicius Moslaves</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </>
  );
}
