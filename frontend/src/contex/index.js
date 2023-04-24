import React from 'react'
import NotificationProvider from './NotificationProvider'
import ThemeProvider from './ThemeProvider'
import AuthProvider from './AuthProvider'

const ContextProvider = ({children}) => {
  return (
    <NotificationProvider>
    <AuthProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
    </AuthProvider>
    </NotificationProvider>
  )
}

export default ContextProvider