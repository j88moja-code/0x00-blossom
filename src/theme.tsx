import { createTheme } from "@mui/material/styles";

// Tailwind CSS-inspired colors based on your CSS variables
const lightColors = {
  background: "hsl(0, 0%, 100%)",
  foreground: "hsl(222.2, 84%, 4.9%)",
  card: "hsl(0, 0%, 100%)",
  cardForeground: "hsl(222.2, 84%, 4.9%)",
  popover: "hsl(0, 0%, 100%)",
  popoverForeground: "hsl(222.2, 84%, 4.9%)",
  primary: "hsl(222.2, 47.4%, 11.2%)",
  primaryForeground: "hsl(210, 40%, 98%)",
  secondary: "hsl(210, 40%, 96.1%)",
  secondaryForeground: "hsl(222.2, 47.4%, 11.2%)",
  muted: "hsl(210, 40%, 96.1%)",
  mutedForeground: "hsl(215.4, 16.3%, 46.9%)",
  accent: "hsl(210, 40%, 96.1%)",
  accentForeground: "hsl(222.2, 47.4%, 11.2%)",
  destructive: "hsl(0, 84.2%, 60.2%)",
  destructiveForeground: "hsl(210, 40%, 98%)",
  border: "hsl(214.3, 31.8%, 91.4%)",
  input: "hsl(214.3, 31.8%, 91.4%)",
  ring: "hsl(222.2, 84%, 4.9%)",
  radius: "0.5rem",
};

const darkColors = {
  background: "hsl(222.2, 84%, 4.9%)",
  foreground: "hsl(210, 40%, 98%)",
  card: "hsl(222.2, 84%, 4.9%)",
  cardForeground: "hsl(210, 40%, 98%)",
  popover: "hsl(222.2, 84%, 4.9%)",
  popoverForeground: "hsl(210, 40%, 98%)",
  primary: "hsl(210, 40%, 98%)",
  primaryForeground: "hsl(222.2, 47.4%, 11.2%)",
  secondary: "hsl(217.2, 32.6%, 17.5%)",
  secondaryForeground: "hsl(210, 40%, 98%)",
  muted: "hsl(217.2, 32.6%, 17.5%)",
  mutedForeground: "hsl(215, 20.2%, 65.1%)",
  accent: "hsl(217.2, 32.6%, 17.5%)",
  accentForeground: "hsl(210, 40%, 98%)",
  destructive: "hsl(0, 62.8%, 30.6%)",
  destructiveForeground: "hsl(210, 40%, 98%)",
  border: "hsl(217.2, 32.6%, 17.5%)",
  input: "hsl(217.2, 32.6%, 17.5%)",
  ring: "hsl(212.7, 26.8%, 83.9%)",
  radius: "0.5rem",
};

const baseTheme = createTheme({
  typography: {
    // fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      margin: "1rem 0",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      margin: "1rem 0",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 8, // Tailwind-inspired border radius
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius)",
        },
      },
    },
  },
});

const lightTheme = createTheme(baseTheme, {
  palette: {
    mode: "light",
    background: {
      default: lightColors.background,
      paper: lightColors.card,
    },
    text: {
      primary: lightColors.foreground,
      secondary: lightColors.mutedForeground,
    },
    primary: {
      main: lightColors.primary,
      contrastText: lightColors.primaryForeground,
    },
    secondary: {
      main: lightColors.secondary,
      contrastText: lightColors.secondaryForeground,
    },
    divider: lightColors.border,
    shadows: Array(25).fill("none"),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(45deg, ${lightColors.primary} 30%, ${lightColors.secondary} 90%)`,
        },
      },
    },
  },
});

const darkTheme = createTheme(baseTheme, {
  palette: {
    mode: "dark",
    background: {
      default: darkColors.background,
      paper: darkColors.card,
    },
    text: {
      primary: darkColors.foreground,
      secondary: darkColors.mutedForeground,
    },
    primary: {
      main: darkColors.primary,
      contrastText: darkColors.primaryForeground,
    },
    secondary: {
      main: darkColors.secondary,
      contrastText: darkColors.secondaryForeground,
    },
    divider: darkColors.border,
    shadows: Array(25).fill("none"),
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: `linear-gradient(45deg, ${darkColors.primary} 30%, ${darkColors.secondary} 90%)`,
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
