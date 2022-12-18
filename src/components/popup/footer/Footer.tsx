import React, { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

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
      <Box color="white">
        Open Shortcut Key:{' '}
        <Box as="span" w="20px" h="20px">
          <FontAwesomeIcon icon={faAppleAlt} />
        </Box>
        cmd + shift + 1
      </Box>
    </Box>
  );
};

export default Footer;
