'use client'

import { ConfigProvider } from 'antd'
import React from 'react'

const ThemeProvider = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b', // Your brand color
          borderRadius: 4, // Default border radius
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}

export default ThemeProvider