import { FC, ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#37000A',
    },
    secondary: {
      main: '#1B2941',
      dark: '#071528',
      light: '#D5D5D5',
      contrastText: '#D5D5D5',
    },
    background: {
      default: '#ede7d9',
    },
  },

  props: {
    MuiButton: {
      disableElevation: true,
      disableRipple: true,
    },
  },
})

interface ThemProps {
  children: ReactNode
}
export const PonyChallengeThemeProvider: FC<ThemProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
