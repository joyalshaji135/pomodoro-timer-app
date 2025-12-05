import { Colors } from './Colors';

const sharedSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const sharedTypography = {
  h1: { fontSize: 32, fontWeight: 'bold' as const },
  h2: { fontSize: 24, fontWeight: '600' as const },
  h3: { fontSize: 20, fontWeight: '600' as const },
  body: { fontSize: 16 },
  caption: { fontSize: 12 },
};

export const Theme: {
  light: {
    colors: typeof Colors.light;
    spacing: Record<string, number>;
    typography: Record<string, { fontSize: number; fontWeight?: string }>;
  };
  dark: {
    colors: typeof Colors.dark;
    spacing: Record<string, number>;
    typography: Record<string, { fontSize: number; fontWeight?: string }>;
  };
} = {
  light: {
    colors: Colors.light,
    spacing: sharedSpacing,
    typography: sharedTypography,
  },
  dark: {
    colors: Colors.dark,
    spacing: sharedSpacing,
    typography: sharedTypography,
  },
};

export type AppTheme = typeof Theme.light;