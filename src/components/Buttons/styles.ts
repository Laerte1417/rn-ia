import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonPrimary: {
    backgroundColor: '#7A5CF2', 
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: '#7A5CF2',
  },
  buttonLink: {
    backgroundColor: 'transparent',
    paddingVertical: 10,
  },
  buttonDisabled: {
    backgroundColor: '#D1D1D6',
    borderColor: '#D1D1D6',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textPrimary: {
    color: '#FFF',
  },
  textOutline: {
    color: '#7A5CF2',
  },
  textLink: {
    color: '#1C1C1E',
    fontSize: 14,
    fontWeight: '600',
  },
  textDisabled: {
    color: '#999',
  },
});
