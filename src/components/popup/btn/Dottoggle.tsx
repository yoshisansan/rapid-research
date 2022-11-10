import React, { FC } from 'react';
import { Box, VStack } from '@chakra-ui/react';

const Dottoggle: FC = () => {
  return (
    <VStack cursor="pointer" spacing="4px" w="20px" p="8px">
      <Box as="span" lineHeight="8px">
        ••
      </Box>
      <Box as="span" lineHeight="8px">
        ••
      </Box>
      <Box as="span" lineHeight="8px">
        ••
      </Box>
    </VStack>
  );
};

export default Dottoggle;
