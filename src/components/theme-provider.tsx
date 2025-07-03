'use client'

import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  themeName: string
  setTheme: (themeName: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ 
  children, 
  initialTheme 
}: { 
  children: React.ReactNode
  initialTheme?: string 
}) {
  const [themeName, setThemeName] = useState(initialTheme || 'classic')

  const setTheme = (newThemeName: string) => {
    setThemeName(newThemeName)
    // Remove existing theme classes
    document.body.classList.remove('theme-classic', 'theme-modern', 'theme-minimal', 'theme-traditional')
    // Add new theme class
    if (newThemeName !== 'classic') {
      document.body.classList.add(`theme-${newThemeName}`)
    }
  }

  useEffect(() => {
    // Fetch theme from API
    const fetchTheme = async () => {
      try {
        const response = await fetch('/api/theme')
        const data = await response.json()
        setTheme(data.theme)
      } catch (error) {
        console.error('Error fetching theme:', error)
        setTheme('classic')
      }
    }

    fetchTheme()
  }, [])

  return (
    <ThemeContext.Provider value={{ themeName, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}