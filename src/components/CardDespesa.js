import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardDespesa({ descricao, valor }) {
  return (
    <View style={styles.card}>
      <Text style={styles.descricao}>{descricao}</Text>
      <Text style={styles.valor}>R$ {parseFloat(valor).toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  descricao: {
    fontSize: 16,
    color: '#333',
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
});