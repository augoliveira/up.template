
import GlobalStyle from '#/styles/GlobalStyle';
import theme from '#/styles/theme';
import { ThemeProvider } from 'styled-components';
import Cursor from '#/components/Cursor';
import * as S from './styles';
import ScrollTop from '../ScrollTop';

interface MainProps {
  children: React.ReactNode;
}
const Main = ({ children }: MainProps) => (
  <ThemeProvider theme={theme}>
    <S.Content>{children}</S.Content>
    <GlobalStyle />
    <Cursor />
    <ScrollTop />
  </ThemeProvider>
);

export default Main;
