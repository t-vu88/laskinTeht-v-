import React, { useState } from 'react';
import {Alert, StyleSheet, Text, TextInput, Pressable, View, KeyboardAvoidingView, Platform} from 'react-native';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [tulos, setTulos] = useState(null);
  const laskeSumma = () => {
    if (!numero1 || !numero2) {
      Alert.alert('Syötä molemmat numerot!');
      return;
    }
    const summa = parseFloat(numero1.replace(',', '.')) + parseFloat(numero2.replace(',', '.'));
    setTulos(summa.toString().replace('.', ','));
  };
  const laskeErotus = () => {
    if (!numero1 || !numero2) {
      Alert.alert('Syötä molemmat numerot!');
      return;
    }
    const erotus = parseFloat(numero1.replace(',', '.')) - parseFloat(numero2.replace(',', '.'));
    setTulos(erotus.toString().replace('.', ','));
    
  };

  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
      <Text style={styles.appName}>Calculator</Text>
      <Text style={styles.tulos}>Result: {tulos}</Text>
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={numero1}
        onChangeText={setNumero1}
      />
      <TextInput
        style={styles.input}
        keyboardType="decimal-pad"
        value={numero2}
        onChangeText={setNumero2}
      />
      <View style={styles.buttonContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed
          ]}
          onPress={laskeSumma}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed 
          ]}
          onPress={laskeErotus}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6eb5aa'
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tulos: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
