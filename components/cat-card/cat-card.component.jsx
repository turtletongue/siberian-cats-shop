import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const CatCard = () => {
  return (
    <Link href="/">
      <a>
        <Box
          maxW="sm"
          borderRadius="lg"
          borderWidth="1px"
          overflow="hidden"
          bgColor="white"
        >
          <Image
            src="/images/pexels-photo-2558605.jpeg"
            width={350}
            height={200}
            alt="Cat Name"
          />
          <Box p="1rem">
            <Text
              fontFamily="Maven Pro"
              fontSize="2xl"
              color="blue.400"
            >Alice</Text>
            <Text
              fontFamily="Maven Pro"
              fontSize="lg"
              color="#7b7b7b"
            >
              Age: 3 months
            </Text>
            <Text
              fontFamily="Maven Pro"
              fontSize="lg"
              color="#7b7b7b"
            >
              Sex: Female
            </Text>
            <Text
              textAlign="center"
              mt="0.5rem"
              fontFamily="Maven Pro"
              fontSize="sm"
            >
              Click to view more...
            </Text>
          </Box>
        </Box>
      </a>
    </Link>
  );
}

export default CatCard;