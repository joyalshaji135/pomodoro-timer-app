import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../hooks/useThemeColor';
import { TimerMode } from '../hooks/useTimer';

interface PomodoroTimerProps {
  timeLeft: number;
  isRunning: boolean;
  mode: TimerMode;
  onToggle: () => void;
  onReset: () => void;
  onNext: () => void;
  formatTime: (seconds: number) => string;
}

export const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  timeLeft,
  isRunning,
  mode,
  onToggle,
  onReset,
  onNext,
  formatTime,
}) => {
  const { colors, isDark } = useTheme();

  const getModeLabel = () => {
    switch (mode) {
      case 'focus':
        return 'Focus Time';
      case 'shortBreak':
        return 'Short Break';
      case 'longBreak':
        return 'Long Break';
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.timerCircle, { backgroundColor: colors.surface }]}>
        <Text style={[styles.timerText, { color: colors.text }]}>
          {formatTime(timeLeft)}
        </Text>
        <Text style={[styles.modeText, { color: colors.textSecondary }]}>
          {getModeLabel()}
        </Text>
      </View>

      <View style={styles.controls}>
        <TouchableOpacity
          style={[styles.controlButton, { borderColor: colors.primary }]}
          onPress={onReset}
        >
          <Ionicons name="refresh" size={24} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.mainButton, { backgroundColor: colors.primary }]}
          onPress={onToggle}
        >
          <Ionicons
            name={isRunning ? 'pause' : 'play'}
            size={32}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, { borderColor: colors.primary }]}
          onPress={onNext}
        >
          <Ionicons name="play-skip-forward" size={24} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 32,
  },
  timerCircle: {
    width: 280,
    height: 280,
    borderRadius: 140,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 24,
  },
  timerText: {
    fontSize: 64,
    fontWeight: 'bold',
  },
  modeText: {
    fontSize: 20,
    marginTop: 8,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginHorizontal: 16,
  },
  mainButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
});