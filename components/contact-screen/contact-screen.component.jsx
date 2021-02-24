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
import { useRouter } from 'next/router';
import { useState } from 'react';

const ContactScreen = () => {
  const router = useRouter();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  const { hasCopied, onCopy } = useClipboard("+0 000 000 00 00");
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Flex
      w="100%"
      bgColor="white"
      p="1rem"
      direction="column"
      justify="center"
    >
      <Text
        textAlign="center"
        fontSize={isLessThan800 ? "4xl" : "6xl"}
        fontFamily="PT Sans"
        color="#7b7b7b"
      >
        { router.locale === 'ru' ? 'Связаться' : 'Contact' }
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
            <FormLabel>{ router.locale === 'ru' ? 'Адрес электронной почты' : 'Email Address' }</FormLabel>
            <Input
              placeholder="Email"
              required
              value={email}
              onChange={ (event) => setEmail(event.target.value) }
            />
          </FormControl>
          <FormControl id="message" mt="0.5rem">
            <FormLabel>{ router.locale === 'ru' ? 'Сообщение' : 'Message' }</FormLabel>
            <Textarea
              required 
              value={message}
              onChange={ (event) => setMessage(event.target.value) }
            />
          </FormControl>
          <Flex w="100%" align="center" mt="0.5rem">
            <Button
              pl="2rem"
              pr="2rem"
              colorScheme="blue"
              onClick={ () => {
                fetch('/api/mail', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ email, message })
                });
                setEmail('');
                setMessage('');
              }}
            >{ router.locale === 'ru' ? 'Написать' : 'Send' }</Button>
            <Text
              ml="1rem"
              fontFamily="PT Sans"
              fontSize="md"
              color="#7b7b7b"
            >
              { router.locale === 'ru' ? 'или позвоните нам: ' : 'or call as at' }
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
                  fontFamily="PT Sans"
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