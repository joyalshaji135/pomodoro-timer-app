import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useThemeColor';

interface IntervalCirclesProps {
  totalIntervals: number;
  currentInterval: number;
}

export const IntervalCircles: React.FC<IntervalCirclesProps> = ({
  totalIntervals,
  currentInterval,
}) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      {Array.from({ length: totalIntervals }).map((_, index) => {
        const isActive = index < currentInterval;
        const isCurrent = index === currentInterval - 1;
        
        return (
          <View
            key={index}
            style={[
              styles.circle,
              {
                backgroundColor: isActive ? colors.primary : 'transparent',
                borderColor: isCurrent ? colors.primary : colors.border,
                borderWidth: isCurrent ? 2 : 1,
              },
            ]}
          >
            <Text
              style={[
                styles.circleText,
                {
                  color: isActive ? colors.background : colors.text,
                },
              ]}
            >
              {index + 1}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 24,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  circleText: {
    fontWeight: '600',
  },
});