export const Colors = {
  light: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#FFFFFF',
    surface: '#F8F9FA',
    text: '#2C3E50',
    textSecondary: '#7F8C8D',
    accent: '#FFD166',
    error: '#E74C3C',
    success: '#2ECC71',
    card: '#FFFFFF',
    border: '#E0E0E0',
    shadow: 'rgba(0,0,0,0.1)',
  },
  dark: {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    textSecondary: '#B0B0B0',
    accent: '#FFD166',
    error: '#E74C3C',
    success: '#2ECC71',
    card: '#2D2D2D',
    border: '#404040',
    shadow: 'rgba(0,0,0,0.3)',
  },
};

export type ThemeColors = typeof Colors.light;