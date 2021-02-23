import Head from 'next/head';
import Menu from '../components/menu/menu.component';
import MainScreen from '../components/main-screen/main-screen.component';
import AboutBreedScreen from '../components/about-breed-screen/about-breed-screen.component';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cat Shop</title>
      </Head>
      <Menu />
      <MainScreen />
      <AboutBreedScreen />
    </>
  )
}
