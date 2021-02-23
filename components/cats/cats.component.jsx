import { Flex, Text, Grid, GridItem, useMediaQuery } from '@chakra-ui/react';
import CatCard from '../cat-card/cat-card.component';

const Cats = () => {
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
        fontFamily="Maven Pro"
        color="#7b7b7b"
      >Our Cats</Text>
      <Grid
        w="100%"
        p="2rem"
        columnGap="1rem"
        templateColumns="repeat(auto-fill, minmax(16rem, 1fr))"
      >
        <GridItem>
          <CatCard />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Cats;