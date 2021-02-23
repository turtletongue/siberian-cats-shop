import Head from 'next/head';
import dynamic from 'next/dynamic';
const Menu = dynamic(
  () => import('../components/menu/menu.component'),
  { ssr: false }
);
const MainScreen = dynamic(
  () => import('../components/main-screen/main-screen.component'),
  { ssr: false }
);
const AboutBreedScreen = dynamic(
  () => import('../components/about-breed-screen/about-breed-screen.component'),
  { ssr: false }
);
const Cats = dynamic(
  () => import('../components/cats/cats.component'),
  { ssr: false }
);
const ContactScreen = dynamic(
  () => import('../components/contact-screen/contact-screen.component'),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Shop</title>
      </Head>
      <Menu />
      <a name="home" />
      <MainScreen />
      <a name="breed" />
      <AboutBreedScreen />
      <a name="cats" />
      <Cats />
      <a name="contact" />
      <ContactScreen />
    </>
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}