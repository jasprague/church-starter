'use client'

import { useTheme } from './theme-provider'

export function ThemeSwitcher() {
  const { themeName, setTheme } = useTheme()

  const themes = [
    { 
      value: 'classic', 
      label: 'Classic', 
      description: 'Blue & Red • Serif headings • Traditional spacing'
    },
    { 
      value: 'modern', 
      label: 'Modern', 
      description: 'Indigo & Pink • Inter font • Bold styling • Large spacing'
    },
    { 
      value: 'minimal', 
      label: 'Minimal', 
      description: 'Grays • Helvetica • Clean lines • Compact spacing'
    },
    { 
      value: 'traditional', 
      label: 'Traditional', 
      description: 'Browns • Playfair Display • Elegant spacing'
    }
  ]

  return (
    <div className="fixed bottom-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50">
      <h3 className="font-semibold mb-3 text-sm">Theme Switcher</h3>
      <div className="space-y-2">
        {themes.map((theme) => (
          <button
            key={theme.value}
            onClick={() => setTheme(theme.value)}
            className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
              themeName === theme.value
                ? 'bg-blue-100 text-blue-800 border border-blue-200'
                : 'hover:bg-gray-50 border border-transparent'
            }`}
          >
            <div className="font-medium">{theme.label}</div>
            <div className="text-xs text-gray-500">{theme.description}</div>
          </button>
        ))}
      </div>
    </div>
  )
}