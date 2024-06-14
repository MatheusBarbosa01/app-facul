import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

const LoginScreen = ({ navigation }: any) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isLoggedIn } = useAuth();

  const handleLogin = () => {
    login(identifier, password);
    if (!isLoggedIn) {
      setError('Usuário não registrado. Por favor, registre-se.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Input placeholder="Username or Email" value={identifier} onChangeText={setIdentifier} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <View style = {styles.fixToText}>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Registre-se" onPress={() => navigation.navigate('Signup')} />
      </View>
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
  errorText: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  fixToText:{
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default LoginScreen;
