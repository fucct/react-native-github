import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

function AddButton(props) {
  return (
    <TouchableOpacity style={{ padding: 10 }}><AntDesign name="pluscircleo"
                                                         size={20}
                                                         color='#0A84FF'/></TouchableOpacity>
  );
}

export default AddButton;