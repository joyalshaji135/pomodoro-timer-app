import { useState, useEffect, useCallback } from 'react';

export type TimerMode = 'focus' | 'shortBreak' | 'longBreak';

export interface TimerSettings {
  focusTime: number; // in minutes
  shortBreak: number;
  longBreak: number;
  intervals: number;
}

export const useTimer = (settings: TimerSettings) => {
  const [timeLeft, setTimeLeft] = useState(settings.focusTime * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<TimerMode>('focus');
  const [currentInterval, setCurrentInterval] = useState(1);
  const [completedSessions, setCompletedSessions] = useState(0);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    switch (mode) {
      case 'focus':
        setTimeLeft(settings.focusTime * 60);
        break;
      case 'shortBreak':
        setTimeLeft(settings.shortBreak * 60);
        break;
      case 'longBreak':
        setTimeLeft(settings.longBreak * 60);
        break;
    }
  }, [mode, settings]);

  const switchMode = useCallback((nextMode: TimerMode) => {
    setMode(nextMode);
    setIsRunning(false);
    switch (nextMode) {
      case 'focus':
        setTimeLeft(settings.focusTime * 60);
        break;
      case 'shortBreak':
        setTimeLeft(settings.shortBreak * 60);
        break;
      case 'longBreak':
        setTimeLeft(settings.longBreak * 60);
        break;
    }
  }, [settings]);

  const handleTimerComplete = useCallback(() => {
    if (mode === 'focus') {
      const newCompleted = completedSessions + 1;
      setCompletedSessions(newCompleted);
      
      if (newCompleted % settings.intervals === 0) {
        switchMode('longBreak');
      } else {
        switchMode('shortBreak');
      }
      setCurrentInterval(prev => prev + 1);
    } else {
      switchMode('focus');
    }
  }, [mode, completedSessions, settings.intervals, switchMode]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimerComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, timeLeft, handleTimerComplete]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const toggleTimer = () => setIsRunning(prev => !prev);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return {
    timeLeft,
    isRunning,
    mode,
    currentInterval,
    completedSessions,
    startTimer,
    pauseTimer,
    toggleTimer,
    resetTimer,
    switchMode,
    formatTime,
    setTimeLeft,
  };
};