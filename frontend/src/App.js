
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ChakraProvider>
      <ColorModeScript />
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
