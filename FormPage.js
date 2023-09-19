import React, { useState } from 'react';
import { Button, View, TextInput, Alert } from 'react-native';

export default function FormPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Call your API here. For demonstration, I'm using an alert.
    Alert.alert('Submitted', `Name: ${name}, Email: ${email}`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 400,paddingTop: 10 }}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
      />
      <Button title="Submit" onPress={handleSubmit} />
      <br></br>
      <Button title="Go to Page 1" onPress={() => navigation.navigate('Balloon')} />
    </View>
    
  );
}
