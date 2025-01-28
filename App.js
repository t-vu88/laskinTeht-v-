import React, { useState } from 'react';
import {Alert, StyleSheet, Text, TextInput, Pressable, View, KeyboardAvoidingView, Platform, FlatList} from 'react-native';

export default function App() {
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
  const renderHistoryItem = ({ item }) => <Text style={styles.historyItem}>{item}</Text>;
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
      <Text style={styles.historyTitle}>History</Text>
      <FlatList 
        data={history} 
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>} 
        style={styles.historyList}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6eb5aa',
    paddingTop: 100,
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
    width: '60%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#0d46b8',
    padding: 10,
    borderRadius: 5,
    width: 70,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  historyTitle: {
    marginTop: 30,
    fontSize: 20,
  },
  historyList: {
    marginTop: 10,
    width: '80%',
  },
  historyItem: {
    fontSize: 18,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign:'center',
    
  },
});
