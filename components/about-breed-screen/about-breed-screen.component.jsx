import { Flex, Box, Text, Center, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const AboutBreedScreen = () => {
  const router = useRouter();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex
      minH="100vh"
      direction={isLessThan800 ? "column" : "row"}
      w="100%"
      bgColor="white"
      align="center"
      p="2rem"
    >
      <Image 
        src="/images/nadi-whatisdelirium-fZ8uf_L52wg-unsplash.jpg"
        width={300}
        height={500}
        alt="Nadi Whatisdelirium Photo"
      />
      <Center
        pt="1rem"
        w={isLessThan800 ? "100%" : "70%"}
        h="100%"
      >
        <Box
          w={isLessThan800 ? "90%" : "75%"}
        >
          <Text
            textAlign="center"
            fontSize={isLessThan800 ? "4xl" : "6xl"}
            fontFamily="PT Sans"
            color="#7b7b7b"
          >
            { router.locale === 'ru' ? "О породе" : "About Breed"}
          </Text>
          <Text
            textAlign="justify"
            fontSize="xl"
            fontFamily="PT Sans"
          >
            { router.locale === 'ru' ? (
              `Сибирская кошка, также называемая сибирской лесной кошкой,
              - это предприимчивая и атлетически сложенная кошка, обладающая
              мягким и ласковым нравом. 
              Сибирская кошка - одна из самых здоровых пород кошек
              с минимальными известными наследственными проблемами со здоровьем.`
            ) : (
              `The Siberian cat, also called the Siberian forest cat,
              is an adventurous and athletically built cat who possesses
              a gentle and affectionate disposition. 
              The Siberian cat is one of the healthier cat breeds
              with minimal known hereditary health issues.`
            ) }
          </Text>
        </Box>
      </Center>
    </Flex>
  );
}

export default AboutBreedScreen;