import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={40} color="black" />
        <Text style={styles.userName}>Hello Ryan!</Text>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('PlantList')}>
        <Text style={styles.addButtonText}>Add a Plant</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Plant List"
        onPress={() => navigation.navigate('PlantList')}
      />
    &nbsp;
      <Button
        title="Adopt a plant"
        onPress={() => navigation.navigate('AdoptPlant')}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    width: width * 0.6,
    alignSelf: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
