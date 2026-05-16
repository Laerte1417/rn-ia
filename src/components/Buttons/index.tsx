import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: 'primary' | 'outline' | 'link';
}

export default function Button({ label, variant = 'primary', disabled, style, ...rest }: ButtonProps) {
  
  const getButtonStyle = () => {
    switch (variant) {
      case 'outline': return styles.buttonOutline;
      case 'link': return styles.buttonLink;
      default: return styles.buttonPrimary;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'outline': return styles.textOutline;
      case 'link': return styles.textLink;
      default: return styles.textPrimary;
    }
  };
  
  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        disabled ? styles.buttonDisabled : null,
        style
      ]}
      disabled={disabled}
      {...rest}
    >
      <Text 
        style={[
          styles.text, 
          getTextStyle(),
          disabled && variant === 'primary' ? styles.textDisabled : null
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
