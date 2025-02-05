import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, Pressable, View, KeyboardAvoidingView, Platform } from 'react-native';

const Calculator = ({ navigation }) => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [tulos, setTulos] = useState(null);
  const [history, setHistory] = useState([]);

  const laskeSumma = () => {
    if (!numero1 || !numero2) {
      Alert.alert('Syötä molemmat numerot!');
      return;
    }
    const summa = parseFloat(numero1.replace(',', '.')) + parseFloat(numero2.replace(',', '.'));
    const resultString = `${numero1} + ${numero2} = ${summa.toString().replace('.', ',')}`;
    setTulos(summa.toString().replace('.', ','));
    setHistory([...history, resultString]);
    setNumero1('');
    setNumero2('');
  };

  const laskeErotus = () => {
    if (!numero1 || !numero2) {
      Alert.alert('Syötä molemmat numerot!');
      return;
    }
    const erotus = parseFloat(numero1.replace(',', '.')) - parseFloat(numero2.replace(',', '.'));
    const resultString = `${numero1} - ${numero2} = ${erotus.toString().replace('.', ',')}`;
    setTulos(erotus.toString().replace('.', ','));
    setHistory([...history, resultString]);
    setNumero1('');
    setNumero2('');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
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
          style={styles.button}
          onPress={laskeSumma}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={laskeErotus}
        >
          <Text style={styles.buttonText}>-</Text>
        </Pressable>
      <Pressable
        style={styles.historyButton}
        onPress={() => navigation.navigate('History', { history })}
      >
        <Text style={styles.buttonText}>History</Text>
      </Pressable>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6eb5aa',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  tulos: {
    fontSize: 20,
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
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0d46b8',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginHorizontal:10, 
    alignItems: 'center',
  },
  historyButton: {
    backgroundColor: '#0d46b8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20, 
    fontWeight: 'bold',
  },
});

export default Calculator;
