import {
  Box,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Tooltip,
  useClipboard,
  useMediaQuery
} from '@chakra-ui/react';

const ContactScreen = () => {
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const { hasCopied, onCopy } = useClipboard("8 912 408 72 00");
  return (
    <Flex
      minH="100vh"
      w="100%"
      bgColor="white"
      p="1rem"
      direction="column"
      justify="center"
    >
      <Text
        textAlign="center"
        fontSize={isLessThan800 ? "4xl" : "6xl"}
        fontFamily="Maven Pro"
        color="#7b7b7b"
      >
        Contact
      </Text>
      <Flex
        w="100%"
        justify="center"
      >
        <Box
          p="2rem"
          w={isLessThan800 ? "100%" : "45%"}
          borderWidth="1px"
          borderRadius="lg"
        >
          <FormControl id="email">
            <FormLabel>Email Address</FormLabel>
            <Input placeholder="Type your email here" required />
          </FormControl>
          <FormControl id="message" mt="0.5rem">
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Type your message here" required />
          </FormControl>
          <Flex w="100%" align="center" mt="0.5rem">
            <Button colorScheme="blue">Send</Button>
            <Text
              ml="1rem"
              fontFamily="Maven Pro"
              fontSize="md"
              color="#7b7b7b"
            >
              or call us at
              {' '}
              <Tooltip
                label={hasCopied ? "Copied!" : "Click to copy to clipboard"}
                bgColor="#f0f0f0"
                color="#7b7b7b"
                borderWidth="1px"
                borderRadius="lg"
                closeDelay={1000}
              >
                <Text
                  as="span"
                  fontFamily="Maven Pro"
                  fontSize="md"
                  color="blue.400"
                  cursor="pointer"
                  onClick={onCopy}
                >
                  +0 000 000 00 00
                </Text>
              </Tooltip>
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

export default ContactScreen;