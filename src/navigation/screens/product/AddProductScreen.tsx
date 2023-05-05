import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';

const AddProductScreen = ({ navigation }: any) => {

  const [name, setname] = useState('');
  const [price, setprice] = useState('');

  const add = () => {
    axios.post('https://northwind.vercel.app/api/products', {
      name: name,
      unitPrice: price
    })
      .then((res) => {
        navigation.navigate('ProductList', { id: res.data.id});
      })
  }

  return (<>
    <View>
      <TextInput onChangeText={setname} placeholder='Name'></TextInput>
      <TextInput onChangeText={setprice} placeholder='Price'></TextInput>
      <Button onPress={add}>Add</Button>
    </View>
  </>
  )
}

export default AddProductScreen