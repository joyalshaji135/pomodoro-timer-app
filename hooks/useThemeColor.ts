import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';

export function useThemeColor() {
  const colorScheme = useColorScheme() || 'light';
  return Colors[colorScheme];
}

export function useTheme() {
  const colorScheme = useColorScheme() || 'light';
  return {
    colors: Colors[colorScheme],
    isDark: colorScheme === 'dark',
  };
}