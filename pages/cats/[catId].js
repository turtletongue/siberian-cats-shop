import { connectToMongoDB } from '../../utils/db-connect';
import Cat from '../../models/cat';

import dynamic from 'next/dynamic';
import Head from 'next/head';
const CatInformation = dynamic(
  () => import('../../components/cat-information/cat-information.component'),
  { ssr: false }
);
const CatGallery = dynamic(
  () => import('../../components/cat-gallery/cat-gallery.component'),
  { ssr: false }
);

const CatPage = ({ cat }) => {
  return (
    <>
      <Head>
        <title>Cat</title>
      </Head>
      <CatInformation cat={ cat } />
      <CatGallery cat={ cat } />
    </>
  );
}

export default CatPage;

export const getStaticPaths = async () => {
  await connectToMongoDB();
  const cats = await Cat.find();
  const catsWithLocales = cats.map(cat => ([
    {
      params: { catId: cat._id.toString() }, locale: 'ru'
    },
    {
      params: { catId: cat._id.toString() }, locale: 'en'
    }
  ]));
  return {
    paths: catsWithLocales.flat(),
    fallback: false
  };
}

export const getStaticProps = async ({ params }) => {
  await connectToMongoDB();
  const cat = await Cat.findById(params.catId);
  return {
    props: {
      cat: {
        _id: cat._id.toString(),
        name: cat._doc.name,
        color: cat._doc.color,
        birthday: cat._doc.birthday.toISOString(),
        imageUrl: cat._doc.imageUrl,
        images: cat._doc.images,
        sex: cat._doc.sex
      }
    },
    revalidate: 60
  }
}