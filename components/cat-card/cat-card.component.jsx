import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import Date from '../date/date.component';
import { useRouter } from 'next/router';

const CatCard = ({ id, name, imageUrl, birthday, sex }) => {
  const router = useRouter();
  return (
    <Link href={`/cats/${id}`}>
      <a>
        <Box
          mb="1rem"
          maxW="sm"
          borderRadius="lg"
          borderWidth="1px"
          overflow="hidden"
          bgColor="white"
        >
          <Image
            src={imageUrl}
            width={350}
            height={200}
            alt={name}
          />
          <Box p="1rem">
            <Text
              fontFamily="PT Sans"
              fontSize="2xl"
              color="blue.400"
            >{ name }</Text>
            <Text
              fontFamily="PT Sans"
              fontSize="lg"
              color="#7b7b7b"
            >
              { router.locale === 'ru' ? 'День рождения' : 'Birthday' }: <Date dateString={ birthday } />
            </Text>
            <Text
              fontFamily="PT Sans"
              fontSize="lg"
              color="#7b7b7b"
            >
              { router.locale === 'ru' ? 'Пол' : 'Sex' }: { sex }
            </Text>
            <Text
              textAlign="center"
              mt="0.5rem"
              fontFamily="PT Sans"
              fontSize="sm"
            >
              { router.locale === 'ru' ? 'Нажмите, чтобы узнать больше' : 'Click to view more' }...
            </Text>
          </Box>
        </Box>
      </a>
    </Link>
  );
}

export default CatCard;