import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const History = ({ route }) => {
  const { history } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.historyTitle}>History</Text>
      <FlatList 
        
        data={history} 
        renderItem={({ item }) => <Text style={styles.historyItem}>{item}</Text>} 
        style={styles.historyList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6eb5aa',
    paddingTop: 100,
  },
  historyTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyList: {
    width: '80%',
  },
  historyItem: {
    fontSize: 18,
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
  },
});

export default History;