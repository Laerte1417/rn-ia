import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Buttons';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="card" size={80} color="#FFF" />
          <View style={styles.iconLines}>
            <View style={styles.iconCircle} />
            <View style={styles.iconLinesRight}>
              <View style={styles.iconLine} />
              <View style={styles.iconLine} />
            </View>
          </View>
        </View>

        <Text style={styles.title}>DevCard</Text>
        <Text style={styles.subtitle}>Seu cartão de visita digital{'\n'}de dev mobile</Text>
      </View>

      <View style={styles.footer}>
        <Button label="Criar meu cartão" onPress={() => router.push('/cadastro')} />
        <Text style={styles.footerText}>Aplicações Móveis - Aula 7</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: '#7A5CF2',
    width: 120,
    height: 80,
    borderRadius: 12,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  iconLines: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
    marginLeft: -10,
  },
  iconCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginRight: 10,
  },
  iconLinesRight: {
    justifyContent: 'space-between',
    height: 16,
  },
  iconLine: {
    width: 40,
    height: 4,
    backgroundColor: '#FFF',
    borderRadius: 2,
    marginBottom: 6,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#7A5CF2',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  footerText: {
    marginTop: 20,
    fontSize: 12,
    color: '#999',
  }
});
