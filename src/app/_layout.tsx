import { Stack, useRouter } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Layout() {
  const router = useRouter();
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen 
        name="index" 
        options={{ 
          title: "DevCard",
          headerRight: () => (
            <TouchableOpacity onPress={() => router.push('/sobre')} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>Sobre</Text>
            </TouchableOpacity>
          )
        }} 
      />
      <Stack.Screen name="cadastro" options={{ title: "Cadastro" }} />
      <Stack.Screen name="preview" options={{ title: "Preview" }} />
      <Stack.Screen name="sucesso" options={{ title: "Sucesso", headerShown: false }} />
      <Stack.Screen name="sobre" options={{ title: "Sobre o App", presentation: "modal" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    paddingRight: 15,
  },
  headerButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  }
});
