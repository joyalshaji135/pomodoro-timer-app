import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useTheme } from '../../hooks/useThemeColor';
import { useTimer, TimerSettings } from '../../hooks/useTimer';
import { PomodoroTimer } from '../../components/PomodoroTimer';
import { TaskInput } from '../../components/TaskInput';
import { TimerControls } from '../../components/TimerControls';
import { IntervalCircles } from '../../components/IntervalCircles';

const DEFAULT_SETTINGS: TimerSettings = {
  focusTime: 25,
  shortBreak: 5,
  longBreak: 15,
  intervals: 4,
};

export default function HomeScreen() {
  const { colors } = useTheme();
  const [task, setTask] = useState('Write an article');
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);

  const timer = useTimer(settings);

  const handleAddTimer = () => {
    // Navigate to settings or show modal
    // For now, just reset timer
    timer.resetTimer();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={[styles.headerTitle, { color: colors.text }]}>
            Joyal Timer
          </Text>
        </View>

        <TaskInput task={task} onChangeTask={setTask} />

        <PomodoroTimer
          timeLeft={timer.timeLeft}
          isRunning={timer.isRunning}
          mode={timer.mode}
          onToggle={timer.toggleTimer}
          onReset={timer.resetTimer}
          onNext={() => timer.switchMode(timer.mode === 'focus' ? 'shortBreak' : 'focus')}
          formatTime={timer.formatTime}
        />

        <View style={[styles.statsCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Timer Settings
          </Text>
          <View style={styles.statsGrid}>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.primary }]}>
                {settings.focusTime}
              </Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                Focus Time
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.primary }]}>
                {settings.shortBreak}
              </Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                Short Break
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.primary }]}>
                {settings.longBreak}
              </Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                Long Break
              </Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statValue, { color: colors.primary }]}>
                {settings.intervals}
              </Text>
              <Text style={[styles.statLabel, { color: colors.textSecondary }]}>
                Sections
              </Text>
            </View>
          </View>
        </View>

        <View style={[styles.sectionCard, { backgroundColor: colors.surface }]}>
          <Text style={[styles.cardTitle, { color: colors.text }]}>
            Current Section
          </Text>
          <IntervalCircles
            totalIntervals={settings.intervals}
            currentInterval={timer.currentInterval}
          />
          <Text style={[styles.sectionInfo, { color: colors.textSecondary }]}>
            Session {timer.completedSessions + 1} of {settings.intervals}
          </Text>
        </View>

        <TimerControls onAddTimer={handleAddTimer} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  statsCard: {
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionCard: {
    borderRadius: 12,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  sectionInfo: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: 8,
  },
});