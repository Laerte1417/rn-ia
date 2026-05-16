import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import Input from '../components/Input';
import ButtonGroupColors from '../components/ButtonGroupColors';
import Button from '../components/Buttons';

export default function CadastroScreen() {
  const router = useRouter();
  
  const [form, setForm] = useState({
    nome: '',
    cargo: '',
    empresa: '',
    anos: '',
    tecnologia: '',
    cor: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validarCampos = () => {
    let novosErros: { [key: string]: string } = {};
    
    if (!form.nome || form.nome.length < 3) novosErros.nome = 'O nome deve ter pelo menos 3 caracteres';
    if (!form.cargo) novosErros.cargo = 'O cargo é obrigatório';
    if (!form.anos || isNaN(Number(form.anos)) || Number(form.anos) <= 0) novosErros.anos = 'Digite um número válido maior que zero';
    if (!form.tecnologia) novosErros.tecnologia = 'A tecnologia é obrigatória';
    if (!form.cor) novosErros.cor = 'Você deve selecionar uma cor';

    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = () => {
    if (validarCampos()) {
      router.push({
        pathname: '/preview',
        params: form,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <KeyboardAvoidingView 
        style={{ flex: 1 }} 
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.subtitle}>Preencha seus dados de dev</Text>
          </View>

          <Input 
            label="Nome completo" 
            placeholder="Ex: João Silva" 
            value={form.nome}
            onChangeText={(text) => handleInputChange('nome', text)}
            errorMessage={errors.nome}
          />

          <Input 
            label="Cargo" 
            placeholder="Ex: Desenvolvedor Mobile" 
            value={form.cargo}
            onChangeText={(text) => handleInputChange('cargo', text)}
            errorMessage={errors.cargo}
          />

          <Input 
            label="Empresa (opcional)" 
            placeholder="Ex: Tech Solutions" 
            value={form.empresa}
            onChangeText={(text) => handleInputChange('empresa', text)}
          />

          <Input 
            label="Anos de experiência" 
            placeholder="Ex: 4" 
            keyboardType="numeric"
            value={form.anos}
            onChangeText={(text) => handleInputChange('anos', text)}
            errorMessage={errors.anos}
          />

          <Input 
            label="Tecnologia favorita" 
            placeholder="Ex: React Native" 
            value={form.tecnologia}
            onChangeText={(text) => handleInputChange('tecnologia', text)}
            errorMessage={errors.tecnologia}
          />

          <View style={styles.colorSection}>
            <Text style={styles.label}>Cor do cartão</Text>
            <ButtonGroupColors 
              selectedColor={form.cor}
              onSelect={(colorCode) => handleInputChange('cor', colorCode)} 
            />
            {errors.cor ? <Text style={styles.errorText}>{errors.cor}</Text> : null}
          </View>

          <View style={styles.footerContainer}>
            <Button
              onPress={handleSubmit}
              label="Gerar Cartão"
              disabled={Object.keys(errors).length > 0}
            />
          </View>
          
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
  headerContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  colorSection: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 10,
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: -10,
    marginBottom: 10,
  },
  footerContainer: {
    marginTop: 10,
    marginBottom: 30,
  }
});
