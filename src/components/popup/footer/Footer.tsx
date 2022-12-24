import React, { FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faWindows } from '@fortawesome/free-brands-svg-icons';

const Footer: FC = () => {
  return (
    <Box
      h="28px"
      w="100%"
      p="0 8px"
      lineHeight="28px"
      position="fixed"
      bottom="0"
      backgroundImage="linear-gradient(to right, #DECBA4, #3E5151)">
      <Flex>
        <Box color="white">Lunch Shortcut Key: </Box>
        <Box p="0 4px">
          <Box as="span" color="white" w="20px" h="20px" pr="4px">
            <FontAwesomeIcon icon={faWindows} />
          </Box>
          <Box as="span" color="white">
            ctrl + shift + 1
          </Box>
        </Box>
        <Box p="0 4px">
          <Box as="span" color="white" w="20px" h="20px" pr="4px">
            <FontAwesomeIcon icon={faApple} />
          </Box>
          <Box as="span" color="white">
            {'\u2318'} + shift + 1
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
