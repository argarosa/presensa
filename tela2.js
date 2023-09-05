import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaB = ({ navigation }) => {
  return (
    <View>
      <Text>Tela B</Text>
      <Button
        title="Voltar para Tela A"
        onPress={() => navigation.navigate('TelaA')}
      />
    </View>
  );
};

export default TelaB;
