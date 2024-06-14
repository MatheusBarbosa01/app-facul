import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const { register } = useAuth();

  const handleSignup = () => {
    register({ email, username, password, cpf, phone, birthDate });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registre-se</Text>
   
      <Text style= {styles.text}>Email:</Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail}/>
      
      <Text style= {styles.text}>Nome de Usuário:</Text>
      <Input placeholder="Nome de Usuário" value={username} onChangeText={setUsername} />
      
      <Text style= {styles.text}>Senha:</Text>
      <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      
      <Text style= {styles.text}>CPF:</Text>
      <Input placeholder="CPF" value={cpf} onChangeText={setCpf} />
      
      <Text style= {styles.text}>Telefone:</Text>
      <Input placeholder="Telefone" value={phone} onChangeText={setPhone} />
      
      <Text style= {styles.text}>Data de Nascimento:</Text>
      <Input placeholder="Data de Nascimento" value={birthDate} onChangeText={setBirthDate} />
      <View style = {styles.fixToText}>
      <Button title="Registrar" onPress={handleSignup} />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
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
  text:{
    color:'#FFFFFF'
  },
  fixToText:{
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

export default SignupScreen;
