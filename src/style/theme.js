import { extendTheme } from "@chakra-ui/react";
import "@fontsource/karla";
import "@fontsource/markazi-text";

const theme = extendTheme({
  colors: {
    primary1: "#495E57",
    primary2: "#F4CE14",
    secondary1: "#EE9972",
    secondary2: "#FBDABB",
    highlight1: "#EDEFEE",
    highlight2: "#333333",
  },
  fonts: {
    body: `'Karla', system-ui`,
    markazi: `'Markazi Text', sans-serif`,
  },
  fontSizes: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px (default)
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "2.5rem", // 40px
    "4xl": "3rem", // 48px
    "5xl": "3.5rem", // 56px
  },
  radii: {
    sm: "1rem", // 16px
    md: "1.25rem", // 20px
  },
  sizes: {
    container: {
      xl: "55.75rem", //892px
    },
  },
});

export default theme;
