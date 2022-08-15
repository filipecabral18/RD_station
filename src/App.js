import { MantineProvider} from '@mantine/core';
import Header from './components/Header';
export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
     <Header/>
    </MantineProvider>
  );
}