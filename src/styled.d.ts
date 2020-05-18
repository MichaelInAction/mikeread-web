// import original module declarations
import 'styled-components'
import { theme } from './theme';

// and extend them!
declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}