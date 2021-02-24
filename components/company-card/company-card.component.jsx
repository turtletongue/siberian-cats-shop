import { Box, Flex, Spacer, Icon, Center, Text, useMediaQuery } from '@chakra-ui/react';
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const CompanyCard = () => {
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");
  return (
    <Box
      position="absolute"
      left={isLessThan600 ? "0" : "5rem"}
      top="30vh"
      width={ isLessThan600 ? "100%" : "24rem"}
    >
      <Box
        bgColor="#f4f5f7"
        height="22rem"
      >
        <Flex
          w="100%"
          height={isLessThan600 ? "3.5rem" : "5rem"}
          align="center"
          p="1rem"
        >
          <Spacer />
          <Flex>
            <Icon
              as={FiInstagram}
              w={6}
              h={6}
              color="blue.400"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.600'
                }
              }}
            />
            <Icon
              as={FiFacebook}
              w={6}
              h={6}
              color="blue.400"
              ml="0.5rem"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.600'
                }
              }}
            />
            <Icon
              as={FiTwitter}
              w={6}
              h={6}
              color="blue.400"
              ml="0.5rem"
              cursor="pointer"
              sx={{
                '&:hover': {
                  color: 'blue.600'
                }
              }}
            />
          </Flex>
        </Flex>
        <Text
          color="#222222"
          fontSize="6xl"
          fontFamily="Caveat"
          textAlign="center"
        >
          SIBERIAN
        </Text>
        <Text
          color="#222222"
          fontSize="6xl"
          fontFamily="Caveat"
          textAlign="center"
        >
          CATS
        </Text>
        <Text
          mt="1rem"
          color="#7b7b7b"
          fontSize="lg"
          fontFamily="PT Sans"
          textAlign="center"
          letterSpacing="widest"
        >beauty and respectability</Text>
      </Box>
    </Box>
  );
}

export default CompanyCard;