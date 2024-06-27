import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const mockData = [
    { id: '1', name: 'Rose' },
    { id: '2', name: 'Tulip' },
    { id: '3', name: 'Sunflower' },
    { id: '4', name: 'Daisy' },
    { id: '5', name: 'Orchid' },
    { id: '6', name: 'Lily' }
];

const AdoptPlant = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    setNames(mockData);
  }, []);


  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Plants for adoption</Text>
      <FlatList
        data={names}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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

export default AdoptPlant;
