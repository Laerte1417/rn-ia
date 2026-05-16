import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import DevCard from '../components/DevCard';
import Button from '../components/Buttons';

type ParamsCartao = {
  nome: string;
  cargo: string;
  empresa?: string;
  anos: string;
  tecnologia: string;
  cor: string;
};

export default function PreviewScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<ParamsCartao>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Text style={styles.headerTitle}>Seu Cartão</Text>

      <DevCard {...params} />

      <View style={styles.actionSection}>
        <Button 
          label="Editar dados" 
          variant="outline" 
          onPress={() => router.back()} 
          style={styles.btnEditar}
        />
        
        <Button 
          label="Finalizar" 
          onPress={() => router.replace('/sucesso')} 
        />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1E',
    alignSelf: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
  },
  actionSection: {
    width: '100%',
    marginTop: 20,
  },
  btnEditar: {
    marginBottom: 15,
  }
});
