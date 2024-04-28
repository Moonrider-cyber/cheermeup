"use client";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Analytics } from "@vercel/analytics/react"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Analytics />
      {children}
    </ThemeProvider>
  );
}