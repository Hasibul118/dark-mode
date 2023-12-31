"use client"
import React from 'react'
import { ThemeProvider } from 'next-themes';

export default function Provider({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
        {children}
    </ThemeProvider>
  )
}