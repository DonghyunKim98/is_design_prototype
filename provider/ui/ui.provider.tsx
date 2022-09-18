import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const theme = createTheme({
  typography: {
    fontFamily: ["Spoqa Han Sans Neo"].join(","),
    h1: {
      fontSize: 56,
      fontWeight: 700,
    },
    h2: {
      fontSize: 56,
      fontWeight: 500,
    },
    h3: {
      fontSize: 48,
      fontWeight: 500,
    },
    h4: {
      fontSize: 28,
      fontWeight: 500,
    },
    h5: {
      fontSize: 28,
      fontWeight: 400,
    },
    h6: {
      fontSize: 24,
      fontWeight: 500,
    },
    body1: {
      fontSize: 24,
      fontWeight: 500,
    },
    body2: {
      fontSize: 24,
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: 16,
    },
  },
  components: {
    MuiTypography: {},
  },
});

export const UIProvider = ({ children }: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};
