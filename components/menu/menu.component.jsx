import { Flex, Text, Spacer, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Menu = () => {
  const router = useRouter();
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <Flex
      minW="100%"
      h="3.5rem"
      justify="center"
      bgColor="#f0f0f0"
      position="fixed"
      top={0}
      boxShadow="md"
      zIndex="1"
      align="center"
    >
      <Flex
        align="center"
        w={isLessThan600 ? "100%" : "65%"}
        p="1rem"
      >
        <Link href="/#home">
          <a>
            <Text
              fontFamily="PT Sans"
              fontSize={isLessThan600 ? "xs" : "md"}
              letterSpacing="widest"
              color="blackAlpha.600"
              cursor="pointer"
              sx={{
                '&:hover, &:visited, &:active, &:link': {
                  color: 'blue.400'
                }
              }}
            >
              { router.locale === 'ru' ? 'ГЛАВНАЯ' : 'HOME' }
            </Text>
          </a>
        </Link>
        <Spacer />
        <Link href="/#breed">
          <a>
            <Text
              fontFamily="PT Sans"
              fontSize={isLessThan600 ? "xs" : "md"}
              letterSpacing="widest"
              color="blackAlpha.600"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.400'
                }
              }}
            >{ router.locale === 'ru' ? 'ПОРОДА' : 'BREED' }</Text>
          </a>
        </Link>
        <Spacer />
        <Link href="/#cats">
          <a>
            <Text
              fontFamily="PT Sans"
              fontSize={isLessThan600 ? "xs" : "md"}
              letterSpacing="widest"
              color="blackAlpha.600"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.400'
                }
              }}
            >{ router.locale === 'ru' ? 'КОШКИ' : 'CATS' }</Text>
          </a>
        </Link>
        <Spacer />
        <Link href="/#contact">
          <a>
            <Text
              fontFamily="PT Sans"
              fontSize={isLessThan600 ? "xs" : "md"}
              letterSpacing="widest"
              color="blackAlpha.600"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.400'
                }
              }}
            >{ router.locale === 'ru' ? 'СВЯЗАТЬСЯ' : 'CONTACT' }</Text>
          </a>
        </Link>
        <Spacer />
        <Link href={ router.locale === 'ru' ? '/en' : '/ru'}>
          <a>
            <Text
              fontFamily="PT Sans"
              fontSize={isLessThan600 ? "xs" : "md"}
              letterSpacing="widest"
              color="blackAlpha.600"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.400'
                }
              }}
            >
              { router.locale === 'ru' ? 'EN' : 'RU' }
            </Text>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Menu;