
import GlobalStyle from '#/styles/GlobalStyle';
import theme from '#/styles/theme';
import { Toaster } from 'react-hot-toast';
import NextNprogress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import Cursor from '#/components/Cursor';
import * as S from './styles';
import ScrollTop from '../ScrollTop';

interface MainProps {
  children: React.ReactNode;
}
const Main = ({ children }: MainProps) => (
  <ThemeProvider theme={theme}>
    <NextNprogress
      color={theme.primary}
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
      showOnShallow
    />
    <Toaster position="bottom-right" />
    <S.Content>{children}</S.Content>
    <GlobalStyle />
    <Cursor />
    <ScrollTop />
  </ThemeProvider>
);

export default Main;
