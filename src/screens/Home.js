import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import Botao from '../components/Botao';
import CardDespesa from '../components/CardDespesa';

export default function Home({ navigation, route }) {
  const [despesas, setDespesas] = useState([
    { id: '1', descricao: 'Supermercado', valor: 150.50 } 
  ]);

  
  useEffect(() => {
    if (route.params?.novaDespesa) {
      setDespesas((prev) => {
        const existe = prev.find(d => d.id === route.params.novaDespesa.id);
        if (existe) return prev;
        return [...prev, route.params.novaDespesa];
      });
    }
  }, [route.params?.novaDespesa]);

  return (
    <View style={styles.container}>
      <FlatList
        data={despesas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardDespesa descricao={item.descricao} valor={item.valor} />
        )}
        ListEmptyComponent={<Text style={styles.vazio}>Nenhuma despesa cadastrada.</Text>}
      />
      
      <Botao 
        title="Adicionar Nova Despesa" 
        onPress={() => navigation.navigate('Cadastro')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  vazio: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  }
});