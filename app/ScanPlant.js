import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-web';


const ScanPlant = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
  }, []);


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Scan</Text>
      <Button>Scan</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  },
});

export default ScanPlant;
