import { Box, MantineProvider } from '@mantine/core';
import InsertVideo from './components/InsertVideo';
import ViewVideo from './components/ViewVideo';

function App() {
  return (
    <MantineProvider>
      <Box
        sx={{
          width: '100vw',
          height: '100vh',
          backgroundColor: '#1E1E1E',
          display: 'flex',
        }}
      >
        <InsertVideo />
        <ViewVideo />
      </Box>
    </MantineProvider>
  );
}

export default App;
