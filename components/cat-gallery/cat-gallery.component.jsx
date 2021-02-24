import { Wrap, WrapItem, Text, Center, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const CatGallery = ({ cat }) => {
  const router = useRouter();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <>
      <Text
        textAlign="center"
        fontSize={isLessThan800 ? "4xl" : "6xl"}
        fontFamily="PT Sans"
        color="#7b7b7b"
      >
        { router.locale === 'ru' ? 'Галерея' : 'Gallery' }
      </Text>
      <Center w="100%">
        <Wrap spacing="1rem" p="2rem">
          {
            cat.images.map((imageUrl, index) => {
              return (
                <WrapItem key={ index }>
                  <Image
                    src={ imageUrl }
                    width={300}
                    height={200}
                    alt={ cat.name }
                  />
                </WrapItem>
              );
            })
          }
        </Wrap>
      </Center>
    </>
  );
}

export default CatGallery;