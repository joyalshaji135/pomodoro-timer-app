import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({ style, type = 'default', ...rest }: ThemedTextProps) {
  const { colors } = useTheme();

  const getStyle = () => {
    switch (type) {
      case 'title':
        return { fontSize: 32, fontWeight: 'bold' as const, color: colors.text };
      case 'defaultSemiBold':
        return { fontSize: 16, fontWeight: '600' as const, color: colors.text };
      case 'subtitle':
        return { fontSize: 20, fontWeight: '600' as const, color: colors.textSecondary };
      case 'link':
        return { fontSize: 16, color: colors.primary };
      default:
        return { fontSize: 16, color: colors.text };
    }
  };

  return <Text style={[getStyle(), style]} {...rest} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
  },
});