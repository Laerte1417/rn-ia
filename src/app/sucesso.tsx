import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Buttons';

export default function Sucesso() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <View style={styles.iconOuterRing}>
          <View style={styles.iconInnerRing}>
            <View style={styles.iconCircle}>
              <Ionicons name="checkmark" size={60} color="#FFF" />
            </View>
          </View>
        </View>
        
        <Text style={styles.titulo}>Cartão criado{'\n'}com sucesso!</Text>
        <Text style={styles.mensagem}>
          Seu cartão de visita digital está pronto.{'\n'}Compartilhe com a galera!
        </Text>
      </View>

      <View style={styles.footer}>
        <Button label="Criar outro cartão" onPress={() => router.replace('/cadastro')} />
        <Button label="Voltar ao início" variant="link" onPress={() => router.replace('/')} style={styles.linkButton} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconOuterRing: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconInnerRing: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(34, 197, 94, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#22C55E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 34,
  },
  mensagem: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    width: '100%',
    paddingBottom: 20,
  },
  linkButton: {
    marginTop: 10,
  }
});
