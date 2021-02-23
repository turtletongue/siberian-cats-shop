import { Flex, Text, Spacer, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';

const Menu = () => {
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex
      w="100vw"
      h="3.5rem"
      justify="center"
      bgColor="#f0f0f0"
      position="fixed"
      top={0}
      boxShadow="md"
      zIndex="1"
    >
      <Flex
        align="center"
        w={isLessThan600 ? "100%" : "65%"}
        p="1rem"
      >
        <Link href="#home">
          <a>
            <Text
              fontFamily="Maven Pro"
              letterSpacing="widest"
              color="blackAlpha.600"
              cursor="pointer"
              sx={{
                '&:hover, &:visited, &:active, &:link': {
                  color: 'blue.400'
                }
              }}
            >HOME</Text>
          </a>
        </Link>
        <Spacer />
        <Link href="#breed">
          <a>
            <Text
              fontFamily="Maven Pro"
              letterSpacing="widest"
              color="blackAlpha.600"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.400'
                }
              }}
            >BREED</Text>
          </a>
        </Link>
        <Spacer />
        <Link href="#cats">
          <a>
            <Text
              fontFamily="Maven Pro"
              letterSpacing="widest"
              color="blackAlpha.600"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.400'
                }
              }}
            >CATS</Text>
          </a>
        </Link>
        <Spacer />
        <Link href="#contact">
          <Text
            fontFamily="Maven Pro"
            letterSpacing="widest"
            color="blackAlpha.600"
            cursor="pointer"
            sx={{
              '&:hover': {
                color: 'blue.400'
              }
            }}
          >CONTACT</Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Menu;