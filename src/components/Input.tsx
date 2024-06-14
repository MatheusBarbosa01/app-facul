import React, { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native';

const Input = (props: TextInputProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.input, focused && styles.inputFocused]}>
      <TextInput
        style={[styles.textInput, { flex: 1 }]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholderTextColor="#7C7C8A" // Cinza claro
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius:7,
    marginBottom: 12,
    marginTop: 8,
    paddingLeft: 8,
  },
  inputFocused: {
    borderColor: '#9654F0',
  },
  textInput: {
    color: 'white', 
  },
});

export default Input;
