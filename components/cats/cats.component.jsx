import { Flex, Text, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import CatCard from '../cat-card/cat-card.component';
import { useRouter } from 'next/router';

const Cats = ({ listOfCats }) => {
  const router = useRouter();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex
      w="100%"
      bgColor="#f4f5f7"
      minH="100vh"
      direction="column"
      justify="center"
    >
      <Text
        textAlign="center"
        fontSize={isLessThan800 ? "4xl" : "6xl"}
        fontFamily="PT Sans"
        color="#7b7b7b"
      >{ router.locale === 'ru' ? 'Наши кошки' : 'Our Cats' }</Text>
      <Grid
        w="100%"
        p="2rem"
        columnGap="1rem"
        templateColumns="repeat(auto-fill, minmax(16rem, 1fr))"
      >
        {
          listOfCats.map(cat => {
            return (
              <GridItem key={cat._id}>
                <CatCard
                  id={cat._id}
                  name={cat.name}
                  sex={cat.sex}
                  birthday={cat.birthday}
                  imageUrl={cat.imageUrl}
                />
              </GridItem>
            );
          })
        }
        
      </Grid>
    </Flex>
  );
}

export default Cats;