import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import PopUp from 'components/popup/PopUp';
import { chakraGlobalTheme } from './styles/chakraGlobal';
import './styles/globalStyle.css';
import './styles/reset.css';

const App = () => {
  return (
    <>
      <ChakraProvider theme={chakraGlobalTheme}>
        <PopUp />
      </ChakraProvider>
    </>
  );
};

const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(<App />);
