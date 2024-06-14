import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9654F0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 3,
    borderColor: '#9654F0',
    width:150,
    alignSelf: "center"
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Button;
