import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ButtonGroupColorsProps {
  onSelect: (color: string) => void;
  selectedColor?: string;
}

const COLORS = [
  { name: 'Azul', hex: '#007AFF' },
  { name: 'Verde', hex: '#34C759' },
  { name: 'Roxo', hex: '#AF52DE' },
];

export default function ButtonGroupColors({ onSelect, selectedColor }: ButtonGroupColorsProps) {
  return (
    <View style={styles.container}>
      {COLORS.map((color) => {
        const isSelected = selectedColor === color.name;
        return (
          <TouchableOpacity
            key={color.name}
            style={[
              styles.button,
              isSelected ? [styles.buttonSelected, { borderColor: color.hex }] : null
            ]}
            onPress={() => onSelect(color.name)}
          >
            <View style={[styles.colorCircle, { backgroundColor: color.hex }]} />
            <Text style={[styles.buttonText, isSelected ? [styles.buttonTextSelected, { color: color.hex }] : null]}>
              {color.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
