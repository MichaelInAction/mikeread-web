import * as styledComponents from "styled-components";

import { theme } from "./theme";

const {
  default: styled,
  css,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<typeof theme>;

export { css, ThemeProvider };
export default styled;