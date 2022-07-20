import { FC, ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#5386e4',
    },
    secondary: {
      main: '#37000A',
    },
    background: {
      default: '#EDE7D9',
      paper: '#FFF',
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
