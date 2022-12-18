import React, { FC } from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import BrandIcon100 from 'assets/Rapid-ReSearch-icon-100.png';

const Header: FC = () => {
  return (
    <header>
      <Flex justify="center" alignItems="center" pt="8px">
        <h1>Rapid Re-Search</h1>
        <Box as="span" w="48px" h="48px" ml="8px">
          <Image src={BrandIcon100} w="48px" h="48px" />
        </Box>
      </Flex>
    </header>
  );
};

export default Header;
