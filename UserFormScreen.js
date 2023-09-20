import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const UserFormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const apiEndpoint = 'http://localhost:3001/users'; //endpoints

const handleSubmit = () => {
  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify({ name, email }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    
    console.error(error);
  });
};


  return (
    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' ,padding:16}}>
      <Text><h2>Page 2: </h2><br></br>User Form</Text><br></br>
      <span>
      <text>Name:  </text>
      <TextInput
        placeholder=""
        value={name}
        onChangeText={text => setName(text)}
        style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}/></span><br></br><span>
      <text>Email:  </text>
      <TextInput
        placeholder="example@123.com"
        value={email}
        onChangeText={text => setEmail(text)}
        style={{ padding: 10, borderWidth: 1, marginBottom: 10 }}
        /></span><br></br>
      <Button title="Submit" onPress={handleSubmit} />
      <br></br>
      <Button title="Go to Page 1" onPress={() => navigation.navigate('Balloon')} />
    </View>
  );
};

export default UserFormScreen;
