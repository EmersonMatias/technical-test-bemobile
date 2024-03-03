import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/theme';
import GlobalStyle from '../styles/global-style';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const createTestQueryClient = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      },
    },
  });
  return queryClient;
};

export const StyledThemeProvider = ({ children }) => {
  const queryClient = createTestQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </QueryClientProvider>

  );
}