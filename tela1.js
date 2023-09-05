import React from 'react';
import { View, Text, Button } from 'react-native';

const TelaA = ({ navigation }) => {
  return (
    <View>
      <Text>Tela A</Text>
      <Button
        title="Ir para Tela B"
        onPress={() => navigation.navigate('TelaB')}
      />
    </View>
  );
};

export default TelaA;
