import { connectToMongoDB } from '../utils/db-connect';
import Cat from '../models/cat';

import Head from 'next/head';
import dynamic from 'next/dynamic';
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

export default function Home({ listOfCats }) {
  return (
    <>
      <Head>
        <title>Cat Shop</title>
      </Head>
      <a name="home" />
      <MainScreen />
      <a name="breed" />
      <AboutBreedScreen />
      <a name="cats" />
      <Cats listOfCats={ listOfCats } />
      <a name="contact" />
      <ContactScreen />
    </>
  )
}

export const getStaticProps = async () => {
  await connectToMongoDB();
  const cats = await Cat.find();
  const listOfCats = cats.map(cat => ({
    _id: cat._id.toString(),
    birthday: cat._doc.birthday.toISOString(),
    name: cat._doc.name,
    sex: cat._doc.sex,
    imageUrl: cat._doc.imageUrl,
    images: cat._doc.images
  }));
  return {
    props: {
      listOfCats
    },
    revalidate: 60
  }
}