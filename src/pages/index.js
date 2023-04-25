import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import About from "../../components/about/about";
import Team from "../../components/team/team";
import Menu from "../../components/menu/menu";
import Spec from "../../components/spec/spec";
import Gallery from "../../components/gallery/gallery";
import Contact from "../../components/contact/contact";
import MyMap from "../../components/mymap/mymap";
import Footer from "../../components/footer/footer";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>La Premiere cafe</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="Petit bistro на одной из самых красивых улиц старого города. Здесь вы забудете о том, что находитесь в Иркутске — La Premiere ориентирован на ценителей подлинного парижского шика и любителей европейского образа жизни."
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header />
      <Main />
      <About />
      <Team />
      <Menu />
      <Spec />
      <Gallery />
      <Contact />
      <MyMap />
      <Footer />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-80FMJKX2QY"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-80FMJKX2QY');
        `}
      </Script>
    </>
  );
}
