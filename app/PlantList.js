import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TextInput, Button } from 'react-native';
import { getFirestore, serverTimestamp, doc } from "firebase/firestore";
import NewPlantForm from "./newPlantForm"
import { collection, query, setDoc,where,getDocs } from "firebase/firestore";
import { addDoc } from 'firebase/firestore';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
export default function PlantList (props)  {
  const [plants, setPlants] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const {db} = {...props}
  useEffect(() => {
    // Simulate fetching data from a database
    fetchData();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    sid: '',
    type: '',
    imgLink: '',
    floor: '',
    location: 'west'
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async() => {

    try {
      const plantsRef = collection(db, 'Plants');
      await addDoc(plantsRef, {
        Name: formData.name,
        SID: formData.sid,
        Type: formData.type,
        Image: formData.imgLink,
        Floor: parseInt(formData.floor), // Assuming 'floor' is a number
        Location: formData.location,
        'Last Watering': serverTimestamp
        // Add any additional fields as needed
      });
      console.log('New plant added successfully:', formData);
      // Clear form after submission
      setFormData({
        name: '',
        sid: '',
        type: '',
        imgLink: '',
        floor: '',
        location: 'west',
      });
    } catch (error) {
      console.error('Error adding plant:', error);
    }
    setDialogOpen(false)
    // Implement Firebase database interaction here
  };

  const fetchData = async () => {
    // Simulate a delay for fetching data
    const plantsRef = collection(db, "Plants");
    const q = query(plantsRef);
    const querySnapshot = await getDocs(q);
    const fetchedPlants = []
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const data =  doc.data()
      fetchedPlants.push({name:data.Name, image:data.Image, users:data.Users, type:data.Type, lastWatering:data['Last Watering']})
    });
    setPlants(fetchedPlants)
  };

  const openDialog = () => {
    setDialogOpen(true)
  }
  const closeDialog = () => {
    setDialogOpen(false)
  }

  return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {plants.map((plant, index) => (
              <View style={styles.item} key={index}>
                <Image source={{ uri: plant.image }} style={styles.itemImage} />
                <Text style={styles.itemName}>{plant.name}</Text>
                <Text>{plant.type}</Text>
                <Text>{plant.users}</Text>
                <Text>Last Watering: {plant.lastWatering.toDate().toDateString()}</Text>
              </View>
          ))}
          <Button variant="outlined" onPress={openDialog} title={'Add New Plant'}>
            Add New Plant
          </Button>
          <Dialog
              open={dialogOpen}
              onClose={closeDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Add a new plant?"}
            </DialogTitle>
            <DialogContent>
                <NewPlantForm onSubmit={handleSubmit} onChange={handleChange} formData={formData} />
            </DialogContent>
            <DialogActions>
              <Button onPress={closeDialog} title={'Close'}></Button>


            </DialogActions>
          </Dialog>
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  scrollView: {
    width: '100%',
  },
  item: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginVertical: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
});

