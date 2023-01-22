
import GlobalStyle from '#/styles/GlobalStyle';
import theme from '#/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Footer } from '../Footer/footer';
import * as S from './styles';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => (
  <ThemeProvider theme={theme}>
    <S.Content>{children}</S.Content>
    <GlobalStyle />
  </ThemeProvider>
);

export default Main;
