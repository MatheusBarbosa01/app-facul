import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import { useAuth } from '../contexts/AuthContext';

const MainScreen = ({ navigation }: any) => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Screen</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
      <Button title="Logout" onPress={logout} />
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

export default MainScreen;
