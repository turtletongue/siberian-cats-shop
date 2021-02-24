import {
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  useMediaQuery
} from '@chakra-ui/react';
import Date from '../date/date.component';
import { useRouter } from 'next/router';

const CatInformation = ({ cat }) => {
  const router = useRouter();
  const [isLessThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex
      mt="5rem"
      direction="column"
      align="center"
    >
      <Box
        bgImage="url(/images/pexels-photo-2558605.jpeg)"
        bgSize="cover"
        bgRepeat="no-repeat"
        borderWidth="1px"
        w={isLessThan800 ? "100%" : "65%"}
        minH="30rem"
        mb="1rem"
      />
      <Table variant="simple" size="sm" w={isLessThan800 ? "100%" : "85%"} mb="2rem">
        <Thead>
          <Tr>
            <Th>{ router.locale === 'ru' ? 'Имя' : 'Fullname' }</Th>
            <Th>{ router.locale === 'ru' ? 'Окрас' : 'Color' }</Th>
            <Th>{ router.locale === 'ru' ? 'Пол' : 'Sex' }</Th>
            <Th>{ router.locale === 'ru' ? 'Дата рождения' : 'Birthday' }</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{ cat.name }</Td>
            <Td>{ cat.color }</Td>
            <Td>{ cat.sex }</Td>
            <Td><Date dateString={ cat.birthday } /></Td>
          </Tr>
        </Tbody>
      </Table>

    </Flex>
  );
}

export default CatInformation;