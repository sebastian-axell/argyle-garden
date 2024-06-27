import React from 'react';
import { View, Text, StyleSheet, TextInput, Picker, Button } from 'react-native';

export default function NewPlantForm({ onSubmit, onChange, formData }) {
    const { name, sid, type, imgLink, floor, location } = formData;

    const handleInputChange = (name, value) => {
        onChange(name, value);
    };

    const handleFormSubmit = () => {
        onSubmit();
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={(text) => handleInputChange('name', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="SID"
                value={sid}
                onChangeText={(text) => handleInputChange('sid', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Type"
                value={type}
                onChangeText={(text) => handleInputChange('type', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Image Link"
                value={imgLink}
                onChangeText={(text) => handleInputChange('imgLink', text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Floor"
                value={floor}
                onChangeText={(text) => handleInputChange('floor', text)}
                keyboardType="numeric"
            />
            <Picker
                selectedValue={location}
                style={styles.input}
                onValueChange={(itemValue, itemIndex) => handleInputChange('location', itemValue)}
            >
                <Picker.Item label="West" value="west" />
                <Picker.Item label="East" value="east" />
            </Picker>
            <Button onPress={handleFormSubmit} title="Submit" style={styles.button} />
        </View>
    );
}

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 3,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    button: {
        marginTop: 10,
    },
});
