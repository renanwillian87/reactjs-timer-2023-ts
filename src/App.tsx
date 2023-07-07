import { ThemeProvider } from 'styled-components';
import { Button } from "./components/Button";
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello World</h1>
      <Button variant="primary"/>
      <Button variant="secondary"/>
      <Button variant="success"/>
      <Button variant="danger"/>

      {/* Important to be within ThemeProvider to load global style */}
      <GlobalStyle/>
    </ThemeProvider>
  )
}
