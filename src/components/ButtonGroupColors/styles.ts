import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 10,
    marginHorizontal: 4,
    backgroundColor: '#FFF',
  },
  buttonSelected: {
    borderWidth: 1.5,
    backgroundColor: '#F0F8FF',
  },
  colorCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 8,
  },
  buttonText: {
    fontSize: 14,
    color: '#666',
  },
  buttonTextSelected: {
    fontWeight: 'bold',
  },
});
