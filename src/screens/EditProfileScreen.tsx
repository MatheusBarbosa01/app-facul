import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

const EditProfileScreen = () => {
  const { user, setUser } = useAuth();
  const [username, setUsername] = useState(user?.username || '');
  const [email, setEmail] = useState(user?.email || '');
  const [cpf, setCpf] = useState(user?.cpf || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [birthDate, setBirthDate] = useState(user?.birthDate || '');

  const handleSave = () => {
    if (user) {
      setUser({ ...user, username, email, cpf, phone, birthDate });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <Input placeholder="Username" value={username} onChangeText={setUsername} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="CPF" value={cpf} onChangeText={setCpf} />
      <Input placeholder="Phone" value={phone} onChangeText={setPhone} />
      <Input placeholder="Birth Date" value={birthDate} onChangeText={setBirthDate} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor:'#1A1A1E' 
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    textAlign: 'center',
    color:'#FFFFFF'
  },
});

export default EditProfileScreen;
