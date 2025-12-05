import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from '../hooks/useThemeColor';

interface TaskInputProps {
  task: string;
  onChangeTask: (task: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ task, onChangeTask }) => {
  const { colors } = useTheme();

  return (
    <TextInput
      style={[styles.input, { 
        backgroundColor: colors.surface,
        color: colors.text,
        borderColor: colors.border,
      }]}
      value={task}
      onChangeText={onChangeTask}
      placeholder="What are you working on?"
      placeholderTextColor={colors.textSecondary}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 8,
    padding: 16,
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 24,
  },
});