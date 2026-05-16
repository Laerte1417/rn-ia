import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface DevCardProps {
  nome?: string;
  cargo?: string;
  empresa?: string;
  anos?: string;
  tecnologia?: string;
  cor?: string;
}

export default function DevCard({ nome = '', cargo = '', empresa = '', anos = '0', tecnologia = '', cor = '' }: DevCardProps) {
  
  let corDeFundo = '#7A5CF2';
  if (cor === 'Azul') corDeFundo = '#4285F4';
  else if (cor === 'Verde') corDeFundo = '#34C759';
  else if (cor === 'Roxo') corDeFundo = '#7A5CF2';

  const anosNum = Number(anos) || 0;
  let nivelTexto = 'Júnior';
  let nivelCor = '#FFCC00';
  
  if (anosNum >= 6) {
    nivelTexto = 'Sênior';
  } else if (anosNum >= 3) {
    nivelTexto = 'Pleno';
  }

  const inicial = nome ? nome.charAt(0).toUpperCase() : '';

  return (
    <View style={[styles.card, { backgroundColor: corDeFundo }]}>

      <View style={styles.circle1} />
      <View style={styles.circle2} />
      
      <View style={styles.content}>
        <View style={styles.avatar}>
          <Text style={[styles.txtAvatar, { color: corDeFundo }]}>{inicial}</Text>
        </View>
        
        <Text style={styles.nome}>{nome}</Text>
        
        <Text style={styles.cargo}>
          {cargo}{'\n'}{empresa}
        </Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.tecnologiaLabel}>Especialista em</Text>
        <Text style={styles.tecnologiaValue}>{tecnologia}</Text>

        <View style={[styles.badge, { backgroundColor: nivelCor }]}>
          <Text style={styles.txtBadge}>{nivelTexto}</Text>
        </View>

        <Text style={styles.anosExperiencia}>{anosNum} anos de experiência</Text>
      </View>
    </View>
  );
}
