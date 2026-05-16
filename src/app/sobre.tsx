import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Sobre() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Sobre o App</Text>
      <Text style={styles.texto}>
        O DevCard é um aplicativo para criar um cartão de visitas digital de desenvolvedor mobile.
      </Text>
      
      <Text style={styles.subtitulo}>Tecnologias utilizadas:</Text>
      <Text style={styles.texto}>- React Native</Text>
      <Text style={styles.texto}>- Expo</Text>
      <Text style={styles.texto}>- Expo Router</Text>
      <Text style={styles.texto}>- TypeScript</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#007AFF',
  },
  texto: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    marginBottom: 5,
  },
});
