import { Box } from '@chakra-ui/react';
import CompanyCard from '../company-card/company-card.component';

const MainScreen = () => {
  return (
    <>
      <CompanyCard />
      <Box
        bgImage="url(images/mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg)"
        bgSize="cover"
        bgRepeat="no-repeat"
        h="100vh"
      />
    </>
  );
}

export default MainScreen;