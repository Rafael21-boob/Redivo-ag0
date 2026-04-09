import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Input from '../components/Input';
import Botao from '../components/Botao';

export default function Cadastro({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');

  const handleSalvar = () => {
    if (descricao.trim() === '' || valor.trim() === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const valorNumerico = parseFloat(valor.replace(',', '.'));
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      Alert.alert('Erro', 'Por favor, insira um valor numérico válido.');
      return;
    }

  
    const novaDespesa = {
      id: Date.now().toString(),
      descricao: descricao,
      valor: valorNumerico,
    };

 
    navigation.navigate('Home', { novaDespesa });
  };

  return (
    <View style={styles.container}>
      <Input 
        label="Descrição da Despesa" 
        placeholder="Ex: Conta de Luz"
        value={descricao}
        onChangeText={setDescricao}
      />
      
      <Input 
        label="Valor (R$)" 
        placeholder="Ex: 150.00"
        value={valor}
        onChangeText={setValor}
        keyboardType="numeric" 
      />

      <Botao title="Salvar Despesa" onPress={handleSalvar} cor="#28A745" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
});