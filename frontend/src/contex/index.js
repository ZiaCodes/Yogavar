import React from 'react'
import NotificationProvider from './NotificationProvider'
import ThemeProvider from './ThemeProvider'

const ContextProvider = ({children}) => {
  return (
    <NotificationProvider>
        <ThemeProvider>{children}</ThemeProvider>
    </NotificationProvider>
  )
}

export default ContextProvider