import MenuTopBar from '@/patterns/MenuTopBar'
import Box from '@/components/wrapper/Box'
import theme from '@/theming/default'

import "../styles/globals.css";
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'
import { setupStore } from '@/store'

import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const store = setupStore()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box minHeight={40} bgcolor={theme.palette.primary.dark}>Announcements</Box>
          <MenuTopBar />
          {children}
       </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  )
}
