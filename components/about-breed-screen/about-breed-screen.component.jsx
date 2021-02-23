import { Flex, Box, Text, Center, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';

const WelcomeScreen = () => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex
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
            fontFamily="Maven Pro"
            color="#7b7b7b"
          >
            About Breed
          </Text>
          <Text
            textAlign="justify"
            fontSize="xl"
            fontFamily="Maven Pro"
          >
            The Siberian cat, also called the Siberian forest cat,
            is an adventurous and athletically built cat who possesses
            a gentle and affectionate disposition.
            {' '}
            The Siberian cat is one of the healthier cat breeds
            with minimal known hereditary health issues.
          </Text>
        </Box>
      </Center>
    </Flex>
  );
}

export default WelcomeScreen;