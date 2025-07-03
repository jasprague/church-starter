export interface ThemeConfig {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
    mutedForeground: string
    border: string
  }
  fonts: {
    heading: string
    body: string
  }
  spacing: {
    headerHeight: string
    sectionPadding: string
  }
}

export const themes: Record<string, ThemeConfig> = {
  classic: {
    name: 'Classic',
    colors: {
      primary: '#1e40af', // Blue
      secondary: '#dc2626', // Red
      accent: '#f59e0b', // Amber
      background: '#ffffff',
      foreground: '#1f2937',
      muted: '#f3f4f6',
      mutedForeground: '#6b7280',
      border: '#e5e7eb',
    },
    fonts: {
      heading: 'serif',
      body: 'sans-serif',
    },
    spacing: {
      headerHeight: '4rem',
      sectionPadding: '4rem 0',
    },
  },
  modern: {
    name: 'Modern',
    colors: {
      primary: '#6366f1', // Indigo
      secondary: '#ec4899', // Pink
      accent: '#10b981', // Emerald
      background: '#ffffff',
      foreground: '#111827',
      muted: '#f9fafb',
      mutedForeground: '#6b7280',
      border: '#e5e7eb',
    },
    fonts: {
      heading: 'sans-serif',
      body: 'sans-serif',
    },
    spacing: {
      headerHeight: '5rem',
      sectionPadding: '6rem 0',
    },
  },
  minimal: {
    name: 'Minimal',
    colors: {
      primary: '#374151', // Gray
      secondary: '#6b7280', // Gray
      accent: '#059669', // Emerald
      background: '#ffffff',
      foreground: '#111827',
      muted: '#f9fafb',
      mutedForeground: '#9ca3af',
      border: '#e5e7eb',
    },
    fonts: {
      heading: 'sans-serif',
      body: 'sans-serif',
    },
    spacing: {
      headerHeight: '3.5rem',
      sectionPadding: '3rem 0',
    },
  },
  traditional: {
    name: 'Traditional',
    colors: {
      primary: '#7c2d12', // Brown
      secondary: '#92400e', // Amber
      accent: '#dc2626', // Red
      background: '#fefefe',
      foreground: '#1c1917',
      muted: '#fafaf9',
      mutedForeground: '#78716c',
      border: '#e7e5e4',
    },
    fonts: {
      heading: 'serif',
      body: 'serif',
    },
    spacing: {
      headerHeight: '4.5rem',
      sectionPadding: '5rem 0',
    },
  },
}

export function getTheme(themeName?: string): ThemeConfig {
  const theme = themeName || process.env.CHURCH_THEME || 'classic'
  return themes[theme] || themes.classic
}

export function generateThemeCSS(theme: ThemeConfig): string {
  return `
    :root {
      --primary: ${theme.colors.primary};
      --secondary: ${theme.colors.secondary};
      --accent: ${theme.colors.accent};
      --background: ${theme.colors.background};
      --foreground: ${theme.colors.foreground};
      --muted: ${theme.colors.muted};
      --muted-foreground: ${theme.colors.mutedForeground};
      --border: ${theme.colors.border};
      --header-height: ${theme.spacing.headerHeight};
      --section-padding: ${theme.spacing.sectionPadding};
    }
    
    .font-heading {
      font-family: ${theme.fonts.heading};
    }
    
    .font-body {
      font-family: ${theme.fonts.body};
    }
  `
}